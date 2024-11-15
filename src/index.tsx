import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app.tsx';
import { FAVORITE_OFFER_LIST } from './mocks/favorite-offer-list.ts';
import { OFFERS } from './mocks/offers.ts';
import { REVIEW_LIST } from './mocks/review-list.ts';

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
      reviewList={REVIEW_LIST}
    />
  </React.StrictMode>
);
