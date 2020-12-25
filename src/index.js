import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { getOffer, city } from './mocks/offers';

const countCard = 5;
const arrOffers = new Array(countCard).fill(``).map(getOffer);
const offer = getOffer();

const Settings = {
  COUNT_OFFERS_RENT: Math.ceil(Math.random(0, 1000) * 100),
};

ReactDOM.render(
  <App
    countOffersRent={Settings.COUNT_OFFERS_RENT}
    offers={arrOffers}
    offer={offer}
    city={city}
  />,
  document.querySelector(`#root`)
);
