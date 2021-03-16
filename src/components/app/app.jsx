import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import { propsOffers, propsComment } from '../../props/props';

const App = (props) => {
  const { offers, offersNearby, comments } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Main />} />
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/favorites">
          <Favorites offers={offers} />
        </Route>

        <Route exact path="/offer/:id">
          {({ match }) => (
            <Room
              offer={offers.find((el) => el.id === +match.params.id)}
              offersNearby={offersNearby}
              comments={comments}
            />
          )}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(propsOffers)),
  offersNearby: PropTypes.arrayOf(PropTypes.shape(propsOffers)),
  comments: PropTypes.arrayOf(PropTypes.shape(propsComment)),
};

export default App;
