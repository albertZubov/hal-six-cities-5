import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PlacesList from '../places-list/places-list';
import Map from '../map/map';
import { propsOffers } from '../../props/props';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ActionCreator } from '../store/action';
import { createArrOffers } from '../../utils/utils';
import CityList from '../city-list/city-list';
import cl from 'classnames';
import { city } from '../../mocks/data';

export const arrOffers = createArrOffers(city.length);

class Main extends PureComponent {
  render() {
    console.log(this.props);
    const {
      countOffersRent,
      offers,
      history,
      changeCity,
      loadingPlacesList,
      activeCity,
      activeOffers,
    } = this.props;
    return (
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img
                    className="header__logo"
                    src="img/logo.svg"
                    alt="6 cities logo"
                    width="81"
                    height="41"
                  />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link
                      to="/favorites"
                      className="header__nav-link header__nav-link--profile"
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">
                        Oliver.conner@gmail.com
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              {/* <CityList /> */}
              <ul
                className="locations__list tabs__list"
                onClick={({ target }) => {
                  changeCity(target.textContent);
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
                        onClick={() => loadingPlacesList(arrOffers[id])}
                      >
                        <span>{el}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {countOffersRent} places to stay in Amsterdam
                </b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex="0">
                    Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li
                      className="places__option places__option--active"
                      tabIndex="0"
                    >
                      Popular
                    </li>
                    <li className="places__option" tabIndex="0">
                      Price: low to high
                    </li>
                    <li className="places__option" tabIndex="0">
                      Price: high to low
                    </li>
                    <li className="places__option" tabIndex="0">
                      Top rated first
                    </li>
                  </ul>
                </form>
                <PlacesList offers={activeOffers} />
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map offers={activeOffers} />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  countOffersRent: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape(propsOffers)),
};

const mapStateToProps = (state) => ({
  activeCity: state.city,
  activeOffers: state.offers,
});
const mapDispatchToProps = (dispatch) => ({
  changeCity: (payload) => dispatch(ActionCreator.changeCity(payload)),
  loadingPlacesList: (payload) =>
    dispatch(ActionCreator.loadingPlacesList(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
