import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { propsOffers, propsComment, propsUserData } from '../../props/props';
import AddComment from '../add-comments/add-comment';
import ReviewsList from '../reviews-list/reviews-list';
import Map from '../map/map';
import PlacesList, { ListType } from '../places-list/places-list';
import withAddComment from '../../hocs/with-add-comment';
import { convertNumberToPercent } from 'utils/utils';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppClient } from 'const/const';
import { commentGet } from '../../store/api-actions';
import { getCommentsData, getUserData } from 'store/selectors';

const AddCommentWrapped = withAddComment(AddComment);
class Room extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { id } = this.props.offer;
    const { loadComments } = this.props;
    loadComments(id);
  }

  render() {
    const {
      title,
      isPremium,
      rating,
      type,
      bedrooms,
      maxAdults,
      price,
      // tariff,
      goods,
      host,
      images,
      id,
    } = this.props.offer;
    const { offersNearby, comments } = this.props;
    const { email, avatarUrl } = this.props.userData;

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

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.map((image, index) => (
                  <div className="property__image-wrapper" key={index}>
                    <img
                      className="property__image"
                      src={image}
                      alt="Photo studio"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                <div
                  className="property__mark"
                  style={isPremium ? { display: `block` } : { display: `none` }}
                >
                  <span>Premium</span>
                </div>
                <div className="property__name-wrapper">
                  <h1 className="property__name">{title}</h1>
                  <button
                    className="property__bookmark-button button"
                    type="button"
                  >
                    <svg
                      className="property__bookmark-icon"
                      width="31"
                      height="33"
                    >
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span
                      style={{ width: convertNumberToPercent(rating) + `%` }}
                    ></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">
                    {rating}
                  </span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  {/* <span className="property__price-text">&nbsp;{tariff}</span> */}
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((elem, index) => (
                      <li className="property__inside-item" key={index}>
                        {elem}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className="property__avatar user__avatar"
                        src={host.avatarUrl}
                        width="74"
                        height="74"
                        alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">{host.name}</span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      A quiet cozy and picturesque that hides behind a a river
                      by the unique lightness of Amsterdam. The building is
                      green and from 18th century.
                    </p>
                    <p className="property__text">
                      An independent House, strategically located between
                      Rembrand Square and National Opera, but where the bustle
                      of the city comes to rest in this alley flowery and
                      colorful.
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">
                    Reviews &middot;{' '}
                    <span className="reviews__amount">{comments.length}</span>
                  </h2>
                  <ReviewsList comments={comments} />
                  <AddCommentWrapped id={id} />
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map offers={offersNearby} />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <PlacesList offers={offersNearby} type={ListType.NEARBY} />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

Room.propTypes = {
  offer: PropTypes.shape(propsOffers),
  offersNearby: PropTypes.arrayOf(PropTypes.shape(propsOffers)),
  comments: PropTypes.arrayOf(PropTypes.shape(propsComment)),
  userData: PropTypes.shape(propsUserData),
  loadComments: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userData: getUserData(state),
  comments: getCommentsData(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadComments: (id) => dispatch(commentGet(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Room);
