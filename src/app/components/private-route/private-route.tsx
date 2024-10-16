import { AppRouteList, AuthStatus } from '../../../contants.ts';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  authStatus: AuthStatus;
  children: JSX.Element;
}

export default function PrivateRoute({authStatus, children}: PrivateRouteProps) {
  return (
    authStatus === AuthStatus.AUTH
      ? children
      : <Navigate to={AppRouteList.Login} />
  );
}
