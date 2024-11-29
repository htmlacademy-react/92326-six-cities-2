import { City, OfferItem } from '../../../models/app.models.ts';
import OfferList from '../../components/offer-list/offer-list.tsx';
import Map from '../../components/map/map.tsx';
import { CITY_LIST } from '../../../mocks/map-data.ts';
import { useEffect } from 'react';
import CityNavList from '../../components/city-nav-list/city-nav-list.tsx';
import { Helmet } from 'react-helmet-async';
import {
  useActiveOfferSelector,
  useCitySelector,
  useOfferListByCitySelector,
  useOffersSelector
} from '../../store/selectors.ts';
import { useNavigate } from 'react-router-dom';
import { AppRouteList } from '../../../contants.ts';
import { useAppDispatch } from '../../store/hooks.ts';
import { actionSetActiveOffer } from '../../store/actions.ts';

interface HomeScreenProps {
  cityList: string[];
}

export default function Main({cityList}: HomeScreenProps) {
  const dispatch = useAppDispatch();
  const offerList: OfferItem[] = useOffersSelector();
  const selectedCity: string = useCitySelector();
  const filteredOffers: OfferItem[] = useOfferListByCitySelector(selectedCity);
  const cityForMap: City = CITY_LIST.find((city: City) => city.title === selectedCity) || CITY_LIST[0];
  // const [activeOffer, setActiveOffer] = useState<OfferItem | null>(null);

  const activeOffer = useActiveOfferSelector();

  const navigate = useNavigate();

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
    // const hoveredOffer: OfferItem | null = offerList.find((item: OfferItem) => item.id === offer.id) || null;
    // setActiveOffer(hoveredOffer);
    dispatch(actionSetActiveOffer(offer));
  };
  const offerCount = filteredOffers.length;

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
              <form
                className="places__sorting"
                action="#"
                method="get"
              >
                <span className="places__sorting-caption">Sort by</span>
                <span
                  className="places__sorting-type"
                  tabIndex={0}
                >
                  Popular
                  <svg
                    className="places__sorting-arrow"
                    width={7}
                    height={4}
                  >
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li
                    className="places__option"
                    tabIndex={0}
                  >
                    Price: low to high
                  </li>
                  <li
                    className="places__option"
                    tabIndex={0}
                  >
                    Price: high to low
                  </li>
                  <li
                    className="places__option"
                    tabIndex={0}
                  >
                    Top rated first
                  </li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OfferList
                  offerList={offerList}
                  onHover={handleOfferHover}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  offerList={offerList}
                  city={cityForMap}
                  activeOffer={activeOffer}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
