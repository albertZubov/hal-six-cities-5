import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
import { propsOffers } from '../../props/props';
import cl from 'classnames';

export const ListType = {
  MAIN: 'MAIN',
  NEARBY: 'NEARBY',
};

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      idActiveCard: null,
    };
  }

  render() {
    const { offers, type = ListType.MAIN } = this.props;

    return (
      <div
        className={cl({
          'cities__places-list places__list tabs__content':
            type === ListType.MAIN,
          'near-places__list places__list': type === ListType.NEARBY,
        })}
      >
        {offers.map((offer, index) => (
          <PlaceCard
            offer={offer}
            key={index}
            typeCard={type}
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
  type: PropTypes.string,
};

export default PlacesList;
