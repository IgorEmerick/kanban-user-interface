import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function ProtectedRoutes(): JSX.Element {
  const isAuthenticated = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
