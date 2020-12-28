import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import { propsOffers } from '../../props/props';

const App = (props) => {
  const { countOffersRent, offers, offer } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={({ history }) => (
            <Main
              countOffersRent={countOffersRent}
              offers={offers}
              history={history}
            />
          )}
        />
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/favorites">
          <Favorites offers={offers} />
        </Route>
        <Route exact path="/offer/:id">
          <Room offer={offer} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  countOffersRent: PropTypes.number.isRequired,
  offer: PropTypes.shape(propsOffers),
  offers: PropTypes.arrayOf(PropTypes.shape(propsOffers)),
};

export default App;
