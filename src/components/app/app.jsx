import React from 'react';
import PageMain from '../page-main/page-main';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../authorization/login';
import Favorites from '../favorites/favorites';
import Offer from '../property/offer';
import { propsOffers } from '../../props/props';
import AddComment from '../add-comments/add-comment';

const App = (props) => {
  const { countOffersRent, offers, offer, city } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={({ history }) => (
            <PageMain
              countOffersRent={countOffersRent}
              offers={offers}
              history={history}
            />
          )}
        />

        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites offers={offers} city={city} />
        </Route>
        <Route exact path="/offer/:id?">
          <Offer offer={offer} />
        </Route>
        <Route exact path="/comment">
          <AddComment />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  countOffersRent: PropTypes.number.isRequired,
  city: PropTypes.array.isRequired,
  offer: PropTypes.shape(propsOffers),
  offers: PropTypes.arrayOf(PropTypes.shape(propsOffers)),
};

export default App;
