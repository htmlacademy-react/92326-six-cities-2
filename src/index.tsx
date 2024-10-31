import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app.tsx';
import { OFFERS } from './mocks/offers.ts';
import { FAVORITE_OFFER_LIST } from './app/pages/offer/favorite_offer_list.ts';

const placesToStayCount = 312;
const offerList = OFFERS;
const favoriteOfferList = FAVORITE_OFFER_LIST;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      placesToStayCount={placesToStayCount}
      offerList={offerList}
      favoriteOfferList={favoriteOfferList}
    />
  </React.StrictMode>
);
