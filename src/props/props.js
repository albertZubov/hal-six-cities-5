import PropTypes from 'prop-types';

export const propsOffers = {
  price: PropTypes.number.isRequired,
  ratingView: PropTypes.number.isRequired,
  classRoom: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tariff: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  conveniences: PropTypes.array.isRequired,
  picture: PropTypes.number.isRequired,
  adults: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  ratingValue: PropTypes.number.isRequired,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      ratingView: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.shape({
        dayPresent: PropTypes.number.isRequired,
        month: PropTypes.string.isRequired,
        monthNumber: PropTypes.number.isRequired,
        year: PropTypes.number.isRequired,
      }),
    })
  ),
};
