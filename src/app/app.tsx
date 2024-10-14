import Main from './pages/main/main.tsx';
import type { Settings } from '../models.ts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login.tsx';
import Favorites from './pages/favorites/favorites.tsx';
import Offer from './pages/offer/offer.tsx';
import NotFound from './pages/404/404.tsx';
import { AppRouteList, AuthStatus } from '../contants.ts';
import PrivateRoute from './components/private-route/private-route.tsx';

interface AppProps {
  settings: Settings;
}

export default function App(props: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRouteList.MAIN}
          element={<Main placesToStayCount={props.settings.placesToStayCount} />}
        />
        <Route
          path={AppRouteList.LOGIN}
          element={<Login />}
        />
        <Route
          path={AppRouteList.FAVORITES}
          element={
            <PrivateRoute authStatus={AuthStatus.NOT_AUTH}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRouteList.OFFER}/:id`}
          element={<Offer />}
        />
        <Route
          path={AppRouteList.NOT_FOUND}
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}
