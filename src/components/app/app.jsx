import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import { propsOffers } from '../../props/props';

const App = (props) => {
  const { countOffersRent, offers } = props;

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
          {({ match }) => (
            <Room offer={offers.find((el) => el.id === match.params.id)} />
          )}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  countOffersRent: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(propsOffers)),
};

export default App;
