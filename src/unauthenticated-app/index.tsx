import React from 'react';

import { RegisterScreen } from './register';
import { LoginScreen } from './login';

function UnauthenticatedApp() {
  const [isRegister, setIsRegister] = React.useState(false);

  return (
    <>
      {isRegister ? <RegisterScreen /> : <LoginScreen />}
      <button onClick={() => setIsRegister(!isRegister)}>{`切换到${isRegister ? '登录' : '注册'}`}</button>
    </>
  );
}

export default UnauthenticatedApp;