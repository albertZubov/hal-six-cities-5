import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';
import cl from 'classnames';
import { city } from '../../mocks/data';
import { getActiveCity } from '../../store/selectors';

const CityList = (props) => {
  const { changeCity, activeCity } = props;

  return (
    <ul
      className="locations__list tabs__list"
      onClick={({ target }) => {
        if (target.tagName !== 'SPAN' && target.tagName !== 'A') {
          return;
        } else {
          changeCity(target.textContent);
        }
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
};

CityList.propTypes = {
  activeCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: getActiveCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeCity: (payload) => dispatch(ActionCreator.changeCity(payload)),
});

export { CityList };
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
