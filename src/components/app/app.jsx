import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';
import { Router as BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import { propsOffers } from '../../props/props';
import { AppRoute, AppClient } from '../../const/const';
import PrivateRoute from 'components/private-route/private-route';
import browserHistory from '../../browser-history';

const App = (props) => {
  const { offers } = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => <Favorites offers={offers} />}
        />
        <Route exact path={AppClient.ROOT} render={() => <Main />} />
        <Route exact path={AppClient.LOGIN}>
          <SignIn />
        </Route>
        <Route exact path={AppClient.OFFER_ID}>
          {({ match }) => (
            <Room offer={offers.find((el) => el.id === +match.params.id)} />
          )}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(propsOffers)),
};

export default App;
