import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import CityNavList from '../../components/city-nav-list/city-nav-list.tsx';
import { useEffect } from 'react';
import { AppRouteList } from '../../../contants.ts';
import { OfferItem } from '../../../models/app.models.ts';
import { useCitySelector, useOfferListByCitySelector } from '../../store/selectors.ts';

type MainProps = {
  cityList: string[];
}

export default function MainEmpty({cityList}: MainProps) {
  const selectedCity: string = useCitySelector();
  const filteredOffers: OfferItem[] = useOfferListByCitySelector(selectedCity);

  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    if (filteredOffers.length !== 0) {
      navigate(AppRouteList.Main);
    }
  }, [filteredOffers, navigate]);

  if (filteredOffers.length !== 0) {
    return null;
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities. No places to stay available</title>
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
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                  Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="#">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityNavList cityList={cityList} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">
                  We could not find any property available at the moment in {selectedCity}
                </p>
              </div>
            </section>
            <div className="cities__right-section" />
          </div>
        </div>
      </main>
    </div>
  );
}
