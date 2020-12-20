import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);
    this._props = props;
    console.log(this._props);
  }

  render() {
    const {
      name,
      classRoom,
      isPremium,
      price,
      ratingView,
      tariff,
    } = this._props.offers;
    return (
      <article className="cities__place-card place-card">
        <div
          className="place-card__mark"
          style={isPremium ? { display: `block` } : { display: `none` }}
        >
          <span>Premium</span>
        </div>
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img
              className="place-card__image"
              src="img/apartment-01.jpg"
              width="260"
              height="200"
              alt="Place image"
            />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">
                &#47;&nbsp;{tariff}
              </span>
            </div>
            <button
              className="place-card__bookmark-button button"
              type="button"
            >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: ratingView + `%` }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{name}</a>
          </h2>
          <p className="place-card__type">{classRoom}</p>
        </div>
      </article>
    );
  }
}

PlaceCard.propTypes = {
  offers: PropTypes.shape({
    price: PropTypes.number.isRequired,
    ratingView: PropTypes.number.isRequired,
    classRoom: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tariff: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    conveniences: PropTypes.array.isRequired,
    // adults: PropTypes.number.isRequired,
    // bedrooms: PropTypes.number.isRequired,
    // ratingValue: PropTypes.number.isRequired,
  }),
};

export default PlaceCard;
