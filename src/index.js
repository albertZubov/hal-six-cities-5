import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { getData } from './mocks/data';

const countCard = 5;
const arrOffers = new Array(countCard).fill(``).map(getData);
const offer = getData();

const Settings = {
  COUNT_OFFERS_RENT: Math.ceil(Math.random(0, 1000) * 100),
};

ReactDOM.render(
  <App
    countOffersRent={Settings.COUNT_OFFERS_RENT}
    offers={arrOffers}
    offer={offer}
  />,
  document.querySelector(`#root`)
);
