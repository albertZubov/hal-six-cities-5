import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { propsOffers } from '../../props/props';
import PlacesSorting from '../places-sorting/places-sorting';
import PlacesList from '../places-list/places-list';
import Map from '../map/map';
import { connect } from 'react-redux';
import { getActiveCity } from 'store/selectors';

class PlacesListContainer extends PureComponent {
  render() {
    const { activeOffer, activeCity } = this.props;

    return (
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {activeOffer.length} places to stay in {activeCity}
          </b>
          <PlacesSorting offers={activeOffer} />
          <PlacesList offers={activeOffer} />
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map offers={activeOffer} />
          </section>
        </div>
      </div>
    );
  }
}

PlacesListContainer.propTypes = {
  activeOffer: PropTypes.arrayOf(PropTypes.shape(propsOffers)),
  activeCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: getActiveCity(state),
});

export default connect(mapStateToProps)(PlacesListContainer);
