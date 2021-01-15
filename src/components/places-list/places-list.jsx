import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
import { propsOffers } from '../../props/props';

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      idActiveCard: null,
    };
  }

  render() {
    const { offers } = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, index) => (
          <PlaceCard
            offer={offer}
            key={index}
            onActiveCard={() => this.setState({ idActiveCard: offer.id })}
            onActiveCardLeave={() => this.setState({ idActiveCard: null })}
          />
        ))}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(propsOffers)),
};

export default PlacesList;
