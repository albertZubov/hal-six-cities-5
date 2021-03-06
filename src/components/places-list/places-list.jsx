import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
import { propsOffers } from '../../props/props';
import cl from 'classnames';
import { connect } from 'react-redux';
import { sortOffer } from 'utils/utils';
import { ActionCreator } from 'store/action';
import { getActiveTypeSort } from 'store/selectors';

export const ListType = {
  MAIN: 'MAIN',
  NEARBY: 'NEARBY',
};

const PlacesList = (props) => {
  const { offers, type = ListType.MAIN, activeTypeSort } = props;
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
          key={offer.id}
          offer={offer}
          typeCard={type}
          onActiveCard={props.getCityID}
          onActiveCardLeave={props.getCityID}
        />
      ))}
    </div>
  );
};

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(propsOffers)),
  type: PropTypes.string,
  activeTypeSort: PropTypes.string,
  getCityID: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeTypeSort: getActiveTypeSort(state),
});

const mapDispatchToProps = (dispatch) => ({
  getCityID: (payload) => dispatch(ActionCreator.getCityID(payload)),
});

export { PlacesList };
export default connect(mapStateToProps, mapDispatchToProps)(PlacesList);
