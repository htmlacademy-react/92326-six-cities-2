import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app.tsx';
import { FAVORITE_OFFER_LIST } from './mocks/favorite_offer_list.ts';
import { OFFERS } from './mocks/offers.ts';

const placesToStayCount = 312;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      placesToStayCount={placesToStayCount}
      offerList={OFFERS}
      favoriteOfferList={FAVORITE_OFFER_LIST}
    />
  </React.StrictMode>
);
