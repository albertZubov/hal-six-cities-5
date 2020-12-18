import React from 'react';
import PageMain from '../page-main/page-main';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../authorization/login';
import Favorites from '../favorites/favorites';
import Offer from '../property/offer';
import PlaceCard from '../place-card/place-card';

const App = ({ countOffersRent, offers }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <PageMain countOffersRent={countOffersRent} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/offer/:id?" component={Offer} />
        <Route exact path="/place-card">
          <PlaceCard offers={offers} />
        </Route>
        {/* <Route exact path="/place-card" offers={offers} component={PlaceCard} /> */}
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  countOffersRent: PropTypes.number.isRequired,
};

export default App;
