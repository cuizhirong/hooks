import React from 'react';
import { AuthProvider } from './auth-context';

export const AppProovider = ({ children }: { children: React.ReactNode}) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}