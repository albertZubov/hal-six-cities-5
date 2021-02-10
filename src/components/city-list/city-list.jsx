import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreator } from '../store/action';
import cl from 'classnames';
import { city } from '../../mocks/data';

class CityList extends PureComponent {
  render() {
    const { changeCity, activeCity } = this.props;

    return (
      <ul
        className="locations__list tabs__list"
        onClick={({ target }) => {
          changeCity(target.textContent);
          // loadingPlacesList(activeHotels);
        }}
      >
        {city.map((el, id) => {
          return (
            <li className="locations__item" key={id}>
              <a
                className={cl('locations__item-link tabs__item', {
                  'tabs__item--active': el === activeCity,
                })}
                href="#"
              >
                <span>{el}</span>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}

CityList.propTypes = {
  activeCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity: (payload) => dispatch(ActionCreator.changeCity(payload)),
  // loadingPlacesList: (payload) =>
  //   dispatch(ActionCreator.loadingPlacesList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
