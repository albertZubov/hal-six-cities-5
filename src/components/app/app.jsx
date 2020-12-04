import React from 'react';
import PageMain from '../page-main/page-main';
import PropTypes from 'prop-types';

const App = ({ countOffersRent }) => {
  return <PageMain countOffersRent={countOffersRent} />;
};

App.propTypes = {
  countOffersRent: PropTypes.number.isRequired,
};

export default App;
