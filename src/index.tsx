import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app.tsx';
import { FAVORITE_OFFER_LIST } from './mocks/favorite-offer-list.ts';
import { REVIEW_LIST } from './mocks/review-list.ts';
import { Provider } from 'react-redux';
import { store } from './app/store/store.ts';
import { CITIES } from './contants.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        favoriteOfferList={FAVORITE_OFFER_LIST}
        reviewList={REVIEW_LIST}
        cityList={CITIES}
      />
    </Provider>
  </React.StrictMode>
);
