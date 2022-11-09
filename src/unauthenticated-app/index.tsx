import React from 'react';
import { Button, Card, Divider } from 'antd';
import styled from '@emotion/styled';

import { RegisterScreen } from './register';
import { LoginScreen } from './login';

function UnauthenticatedApp() {
  const [isRegister, setIsRegister] = React.useState(false);

  return (
    <Container>
      <ShadowCard>
        <Title>
          {isRegister ? '请注册' : '请登录'}
        </Title>
        {isRegister ? <RegisterScreen /> : <LoginScreen />}
        <Divider />
        <Button type="link" onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? '已经有账号了？直接登录' : '没有账号，请注册'}
        </Button>
      </ShadowCard>
    </Container>
  );
}

export const LongButton = styled(Button)`
  width: 100%;
`

const Title = styled.h2`
margin-bottom: 2.4rem;
color: rgb(94, 108, 132);
`;

const ShadowCard = styled(Card)`
width: 40rem;
min-height: 56rem;
padding: 3.2rem 4rem;
border-radius: 0.3rem;
box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  text-align: center;
`

export default UnauthenticatedApp;