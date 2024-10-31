import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app.tsx';
import { OFFERS } from './mocks/offers.ts';

const placesToStayCount = 312;
const offerList = OFFERS;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      placesToStayCount={placesToStayCount}
      offerList={offerList}
    />
  </React.StrictMode>
);
