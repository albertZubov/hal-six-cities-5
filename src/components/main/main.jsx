import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CityList from '../city-list/city-list';
import PlacesListContainer from '../places-list-container/places-list-container';
import PlacesListEmpty from '../places-list-empty/places-list-empty';
import cl from 'classnames';
import { propsUserData } from '../../props/props';
import { getOffers, getPlacesList, getUserData } from 'store/selectors';
import { AppClient } from 'const/const';

class Main extends PureComponent {
  render() {
    const { offers, activeOffer } = this.props;
    const { email, avatarUrl } = this.props.userData;
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
                      to={AppClient.FAVORITES}
                      className="header__nav-link header__nav-link--profile"
                    >
                      <div
                        className="header__avatar-wrapper user__avatar-wrapper"
                        style={{ backgroundImage: `url(${avatarUrl})` }}
                      ></div>
                      <span className="header__user-name user__name">
                        {email}
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
  activeOffer: PropTypes.array.isRequired,
  userData: PropTypes.shape(propsUserData),
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  activeOffer: getPlacesList(state),
  userData: getUserData(state),
});

export { Main };
export default connect(mapStateToProps)(Main);
