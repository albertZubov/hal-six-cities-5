import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { getData } from './mocks/data';

const COUNT_CARD_OFFERS = 5;
const COUNT_CARD_OFFERS_NEARBY = 3;
const arrOffers = (count) => new Array(count).fill(``).map(getData);

const Settings = {
  COUNT_OFFERS_RENT: 3,
};

ReactDOM.render(
  <App
    countOffersRent={Settings.COUNT_OFFERS_RENT}
    offers={arrOffers(COUNT_CARD_OFFERS)}
    offersNearby={arrOffers(COUNT_CARD_OFFERS_NEARBY)}
  />,
  document.querySelector(`#root`)
);
