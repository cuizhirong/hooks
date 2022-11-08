import * as React from 'react';
import { User } from 'screens/project-list/search-panel';

import * as auth from '../auth_provider';

interface AuthForm {
  username: string;
  password: string;
}

const AuthContext = React.createContext<{
  user: User | null,
  login: (form: AuthForm) => Promise<void>;
  register: (form: AuthForm) => Promise<void>;
  logout: () => Promise<void>;
} | undefined>(undefined);

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<User | null>(null);

  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const register = (form: AuthForm) => auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));

  return <AuthContext.Provider children={children} value={{ user, login, register, logout}}></AuthContext.Provider>
}

export const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error('AuthContext必须在AuthProvider中使用');
  }

  return context;
}
