import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
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

const api = createAPI(() =>
  store.dispatch(
    ActionCreator.requereAuthorization(AuthorizationStatus.NO_AUTH)
  )
);

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect)
  )
);

Promise.all([store.dispatch(fetchPlacesList()), store.dispatch(checkAuth())])
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector(`#root`)
    );
  })
  .catch(console.error);
