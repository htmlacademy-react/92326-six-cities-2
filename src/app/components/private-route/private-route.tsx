import { AppRouteList, AuthStatus } from '../../../contants.ts';
import { Navigate } from 'react-router-dom';
import { PropsWithChildren, ReactElement } from 'react';

interface PrivateRouteProps extends PropsWithChildren {
  authStatus: AuthStatus;
  children: ReactElement;
}

export default function PrivateRoute({authStatus, children}: PrivateRouteProps) {
  return (
    authStatus === AuthStatus.Auth
      ? children
      : <Navigate to={AppRouteList.Login} />
  );
}
