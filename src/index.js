import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { getOffer, getComment } from './mocks/data';

const COUNT_CARD_OFFERS = 5;
const COUNT_COMMENTS = 1;
const COUNT_CARD_OFFERS_NEARBY = 3;
const arrOffers = (count) => new Array(count).fill(``).map(getOffer);
const arrComments = (count) => new Array(count).fill(``).map(getComment);

const Settings = {
  COUNT_OFFERS_RENT: 3,
};

ReactDOM.render(
  <App
    countOffersRent={Settings.COUNT_OFFERS_RENT}
    offers={arrOffers(COUNT_CARD_OFFERS)}
    offersNearby={arrOffers(COUNT_CARD_OFFERS_NEARBY)}
    comments={arrComments(COUNT_COMMENTS)}
  />,
  document.querySelector(`#root`)
);
