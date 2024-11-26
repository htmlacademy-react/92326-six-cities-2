import Main from './pages/main/main.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login.tsx';
import Favorites from './pages/favorites/favorites.tsx';
import Offer from './pages/offer/offer.tsx';
import NotFound from './pages/404/404.tsx';
import { AppRouteList, AuthStatus } from '../contants.ts';
import PrivateRoute from './components/private-route/private-route.tsx';
import { OfferItem, ReviewItem } from '../models/app.models.ts';
import { useAppSelector } from './store/hooks.ts';
import MainEmpty from './pages/main-empty/main-empty.tsx';
import { HelmetProvider } from 'react-helmet-async';
import { getOfferListByCity } from '../utils/get-offer-list-by-city.ts';

interface AppProps {
  favoriteOfferList: OfferItem[];
  reviewList: ReviewItem[];
  cityList: string[];
}

export default function App(props: AppProps) {
  const offerList: OfferItem[] = useAppSelector((state) => state.offers);
  const selectedCity: string = useAppSelector((state) => state.city);
  const filteredOffers: OfferItem[] = getOfferListByCity(selectedCity, offerList);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRouteList.Main}
            element={
              filteredOffers.length > 0
                ?
                <Main
                  cityList={props.cityList}
                  selectedCity={selectedCity}
                  offerList={offerList}
                />
                :
                <MainEmpty cityList={props.cityList} />
            }
          />
          <Route
            path={AppRouteList.Login}
            element={<Login />}
          />
          <Route
            path={AppRouteList.Favorites}
            element={
              <PrivateRoute authStatus={AuthStatus.Auth}>
                <Favorites offerList={props.favoriteOfferList} />
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRouteList.Offer}/:id`}
            element={<Offer offerList={offerList} reviewList={props.reviewList} />}
          />
          <Route
            path={AppRouteList.NotFound}
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
