import React from 'react';
import PropTypes from 'prop-types';
import PlaceCardFavorites from '../place-card-favorites/place-card-favorites';
import { propsOffers, propsUserData } from '../../props/props';
import { connect } from 'react-redux';
import { getOffers, getOffersFavorite, getUserData } from 'store/selectors';

const Favorites = (props) => {
  const { offersFavorite, userData } = props;
  const { email, avatarUrl } = userData;
  const arrKeyCities = Object.keys(offersFavorite);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
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
                  <a className="header__nav-link header__nav-link--profile">
                    <div
                      className="header__avatar-wrapper user__avatar-wrapper"
                      style={{ backgroundImage: `url(${avatarUrl})` }}
                    ></div>
                    <span className="header__user-name user__name">
                      {email}
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">
              {arrKeyCities.length ? 'Saved listing' : 'Nothing yet saved'}
            </h1>
            <ul className="favorites__list">
              {arrKeyCities.map((city, id) => {
                return (
                  <li className="favorites__locations-items" key={id}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {offersFavorite[city].map((offer, ind) => (
                        <PlaceCardFavorites offer={offer} key={ind} />
                      ))}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  offersFavorite: PropTypes.object.isRequired,
  userData: PropTypes.shape(propsUserData),
};

const mapStateToProps = (state) => ({
  offersFavorite: getOffersFavorite(state),
  offers: getOffers(state),
  userData: getUserData(state),
});

export default connect(mapStateToProps)(Favorites);
