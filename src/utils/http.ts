import qs from 'qs';

import { logout } from 'auth_provider';
import { useAuth } from 'context/auth-context';

const apiUrl = 'http://localhost:3001';

interface Config extends RequestInit {
  data?: object;
  token?: string | null;
}
export function http(endpoint: string, {data, headers, token, ...commonConfig}: Config = {}) {
  const config = {
    method: 'GET',
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': data ? 'application/json' : '',
    },
    ...commonConfig
  };

  if (config.method?.toUpperCase() === 'GET') {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }

  return window.fetch(`${apiUrl}/${endpoint}`, config).then((response) => {
    if (response.status === 401) {
      logout();
      window.location.reload();

      return Promise.reject('请重新登录');
    }

    const data = response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  })
}

export function useHttp() {
  const { user } = useAuth();
  return (...[endpoint, config]: Parameters<typeof http>) => http(endpoint, {...config, token: user?.token})
}