import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { getOffer, getComment } from './mocks/data';
import { createArrElements } from './utils/utils';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './components/store/reducer';

const COUNT_CARD_OFFERS = 50;
const COUNT_COMMENTS = 1;
const COUNT_CARD_OFFERS_NEARBY = 3;
const arrOffers = createArrElements(COUNT_CARD_OFFERS, getOffer);
const arrOffersNearby = createArrElements(COUNT_CARD_OFFERS_NEARBY, getOffer);
const arrComments = createArrElements(COUNT_COMMENTS, getComment);

const store = createStore(
  reducer(arrOffers),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

ReactDOM.render(
  <Provider store={store}>
    <App
      offers={arrOffers}
      offersNearby={arrOffersNearby}
      comments={arrComments}
    />
  </Provider>,
  document.querySelector(`#root`)
);
