import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
import { propsOffers } from '../../props/props';
import cl from 'classnames';
import { connect } from 'react-redux';
import { sortOffer } from '../../utils/utils';
import { ActionCreator } from '../store/action';
import { getActiveTypeSort } from 'components/store/selectors';

export const ListType = {
  MAIN: 'MAIN',
  NEARBY: 'NEARBY',
};

class PlacesList extends PureComponent {
  render() {
    const { offers, type = ListType.MAIN, activeTypeSort } = this.props;
    const sortedOffers = sortOffer(offers, activeTypeSort);

    return (
      <div
        className={cl('places__list', {
          'cities__places-list tabs__content': type === ListType.MAIN,
          'near-places__list': type === ListType.NEARBY,
        })}
      >
        {sortedOffers.map((offer) => (
          <PlaceCard
            offer={offer}
            key={offer.id}
            typeCard={type}
            onActiveCard={this.props.getCityID}
            onActiveCardLeave={this.props.getCityID}
          />
        ))}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(propsOffers)),
  type: PropTypes.string,
  activeTypeSort: PropTypes.string.isRequired,
  getCityID: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeTypeSort: getActiveTypeSort(state),
});

const mapDispatchToProps = (dispatch) => ({
  getCityID: (payload) => dispatch(ActionCreator.getCityID(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesList);
