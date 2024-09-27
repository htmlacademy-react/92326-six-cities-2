import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app.tsx';

export interface Settings {
  placesToStayCount: number;
}

const settings: Settings = {
  placesToStayCount: 312
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App settings={settings}/>
  </React.StrictMode>
);
