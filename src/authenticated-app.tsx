import { useAuth } from 'context/auth-context';
import { ProjectListScreen } from 'screens/project-list';
import styled from '@emotion/styled';
import { Row } from 'components/lib';
import { Button, Dropdown, Menu } from 'antd';

function AuthenticatedApp() {
  const { logout } = useAuth();
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <h2>Logo</h2>
          <h2>项目</h2>
          <h2>用户</h2>
        </HeaderLeft>
        <HeaderRight>
          <Dropdown overlay={<Menu>
            <Menu.Item key="logout">
              <Button type="link" onClick={logout}>登出</Button>
            </Menu.Item>
          </Menu>}>
            <Button type="link" onClick={e => e.preventDefault()}>
              Hi, jack
            </Button>
          </Dropdown>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
  );
}


const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;

const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const HeaderLeft = styled(Row)`
`

const HeaderRight = styled.div``;

const Main = styled.main`
`;

export default AuthenticatedApp;