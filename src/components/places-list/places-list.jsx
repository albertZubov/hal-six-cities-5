import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
import { propsOffers } from '../../props/props';
import { Link } from 'react-router-dom';

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { offers } = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, id) => (
          <Link to={'/offer/' + id} key={id}>
            <PlaceCard offer={offer} />
            TODO {/* Некорректно отрисовывается offer при переходе по ссылке */}
          </Link>
        ))}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(propsOffers)),
};

export default PlacesList;
