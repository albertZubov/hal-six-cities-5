import PropTypes from 'prop-types';

export const propsOffers = {
  bedrooms: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  goods: PropTypes.array.isRequired,
  images: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  adults: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  tariff: PropTypes.string.isRequired,
};
