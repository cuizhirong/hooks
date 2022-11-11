import { useEffect } from 'react';
import { cleanObject } from 'utils';
import { User } from 'screens/project-list/search-panel'

import useAsync from './use-async';
import { useHttp } from './http';

function useProjects(params?: Partial<User>) {
  const { run, ...result } = useAsync<User[]>();

  const client = useHttp();

  useEffect(() => {
    run(client('users', {data: cleanObject(params || {})}));
  }, [params]);

  return result;
}

export default useProjects;