import { useAuth } from 'context/auth-context';
import { ProjectListScreen } from 'screens/project-list';

function AuthenticatedApp() {
  const { logout } = useAuth();
  return (
    <>
      <button onClick={logout}>登出</button>
      <ProjectListScreen />
    </>
  );
}

export default AuthenticatedApp;