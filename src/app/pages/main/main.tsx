import { City, OfferItem } from '../../../models/app.models.ts';
import OfferList from '../../components/offer-list/offer-list.tsx';
import Map from '../../components/map/map.tsx';
import { CITY_LIST } from '../../../mocks/map-data.ts';
import { useEffect } from 'react';
import CityNavList from '../../components/city-nav-list/city-nav-list.tsx';
import { Helmet } from 'react-helmet-async';
import {
  useActiveSortSelector,
  useCitySelector,
  useOfferListByCitySelector,
  useOffersSelector
} from '../../store/selectors.ts';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { AppRouteList } from '../../../contants.ts';
import { useAppDispatch } from '../../store/hooks.ts';
import { actionSetActiveOffer } from '../../store/actions.ts';
import { SortTypes } from '../../app.contants.tsx';
import Sort from '../../components/sort.tsx';

interface HomeScreenProps {
  cityList: string[];
}

const getSortedOffers = (offers: OfferItem[], sortType: string): OfferItem[] => {
  const slicedOffers = [...offers];

  switch (sortType) {
    case SortTypes.POPULAR:
      return offers;
    case SortTypes.PRICE_FROM_LOW:
      slicedOffers.sort((a, b) => a.price - b.price);
      return slicedOffers;
    case SortTypes.PRICE_FROM_HIGH:
      slicedOffers.sort((a, b) => b.price - a.price);
      return slicedOffers;
    case SortTypes.RATING:
      slicedOffers.sort((a, b) => b.rating - a.rating);
      return slicedOffers;
    default:
      return offers;
  }
};

export default function Main({cityList}: HomeScreenProps) {
  const dispatch = useAppDispatch();
  const offerList: OfferItem[] = useOffersSelector();
  const selectedCity: string = useCitySelector();
  const filteredOffers: OfferItem[] = useOfferListByCitySelector(selectedCity);
  const cityForMap: City = CITY_LIST.find((city: City) => city.title === selectedCity) || CITY_LIST[0];
  const navigate: NavigateFunction = useNavigate();
  const offerCount: number = filteredOffers.length;
  const sortTypes: SortTypes[] = Object.values(SortTypes);
  const activeSort: string = useActiveSortSelector();
  const sortedOffers: OfferItem[] = getSortedOffers(filteredOffers, activeSort);

  useEffect(() => {
    if (filteredOffers.length === 0) {
      navigate(AppRouteList.MainEmpty);
    }
  }, [filteredOffers, navigate]);

  if (filteredOffers.length === 0) {
    return null;
  }

  const handleOfferHover = (offer: OfferItem) => {
    if (!offer) {
      dispatch(actionSetActiveOffer(null));
      return;
    }
    dispatch(actionSetActiveOffer(offer));
  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a
                    className="header__nav-link"
                    href="#"
                  >
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityNavList cityList={cityList} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offerCount} places to stay in {selectedCity}</b>
              <Sort sortTypes={sortTypes} />
              <div className="cities__places-list places__list tabs__content">
                <OfferList
                  offerList={sortedOffers}
                  onHover={handleOfferHover}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  offerList={offerList}
                  city={cityForMap}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
