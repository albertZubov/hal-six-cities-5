import React from 'react';
import PageMain from '../page-main/page-main';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../authorization/login';
import Favorites from '../favorites/favorites';
import Offer from '../property/offer';
import PlaceCard from '../place-card/place-card';

const App = (props) => {
  const { countOffersRent, offers } = props;
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
        {/* <Route exact path="/place-card" component={PlaceCard} offers={offers} /> */}
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  countOffersRent: PropTypes.number.isRequired,
  offers: PropTypes.shape({
    price: PropTypes.number.isRequired,
    ratingView: PropTypes.number.isRequired,
    classRoom: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tariff: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    conveniences: PropTypes.array.isRequired,
    // adults: PropTypes.number.isRequired,
    // bedrooms: PropTypes.number.isRequired,
    // ratingValue: PropTypes.number.isRequired,
  }),
};

export default App;
