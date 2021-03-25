import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { getOffer, getComment } from './mocks/data';
import { createArrElements } from 'utils/utils';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from 'store/reducers/root-reducer';
import { createAPI } from './services/api';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ActionCreator } from 'store/action';
import { AuthorizationStatus } from './const/const';
import { fetchPlacesList, checkAuth } from 'store/api-actions';
import { redirect } from './store/middlewares/redirect';

const COUNT_CARD_OFFERS_NEARBY = 3;
const arrOffersNearby = createArrElements(COUNT_CARD_OFFERS_NEARBY, getOffer);

const api = createAPI(() =>
  store.dispatch(
    ActionCreator.requereAuthorization(AuthorizationStatus.NO_AUTH)
  )
);

// console.log(fetchPlacesList());

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect)
  )
);

Promise.all([store.dispatch(fetchPlacesList()), store.dispatch(checkAuth())])
  .then(([offers]) => {
    ReactDOM.render(
      <Provider store={store}>
        <App offers={offers} offersNearby={arrOffersNearby} />
      </Provider>,
      document.querySelector(`#root`)
    );
  })
  .catch(console.error);
