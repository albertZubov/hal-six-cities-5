import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';

const Settings = {
  COUNT_OFFERS_RENT: Math.ceil(Math.random(0, 1000) * 100),
};

ReactDOM.render(
  <App countOffersRent={Settings.COUNT_OFFERS_RENT} offers={offers} />,
  document.querySelector(`#root`)
);
