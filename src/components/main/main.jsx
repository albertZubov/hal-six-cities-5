import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CityList from '../city-list/city-list';
import PlacesListContainer from '../places-list-container/places-list-container';
import PlacesListEmpty from '../places-list-empty/places-list-empty';
import cl from 'classnames';
import { sortArrOnCities } from '../../utils/utils';

class Main extends PureComponent {
  render() {
    const { offers, activeCity } = this.props;
    const activeOffer = sortArrOnCities(offers)[activeCity];
    const placesList = offers.length ? (
      <PlacesListContainer activeOffer={activeOffer} />
    ) : (
      <PlacesListEmpty />
    );

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
        <main
          className={cl('page__main page__main--index', {
            'page__main--index-empty': placesList,
          })}
        >
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CityList />
            </section>
          </div>
          <div className="cities">{placesList}</div>
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  offers: PropTypes.array.isRequired,
  activeCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  activeCity: state.activeCity,
});

export default connect(mapStateToProps)(Main);
