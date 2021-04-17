import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { commentPost } from '../../store/api-actions';

const InputName = {
  rating: 'rating',
  review: 'review',
};

const AddComment = (props) => {
  const titleLabel = [`perfect`, `good`, `not bad`, `badly`, `terribly`];
  const { id, onSubmit } = props;

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmit = useCallback((evt) => {
    evt.preventDefault();
    onSubmit({
      description: review,
      rating,
      id,
    });
  });

  const handleFieldChange = useCallback((evt) => {
    evt.preventDefault();
    const { value, name } = evt.target;

    switch (name) {
      case InputName.rating:
        setRating(value);
        break;
      case InputName.review:
        setReview(value);
        break;
    }
  });

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {titleLabel.map((el, index, arr) => (
          <React.Fragment key={index}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={arr.length - index}
              id={arr.length - index + '-stars'}
              type="radio"
              onChange={handleFieldChange}
            />
            <label
              htmlFor={arr.length - index + '-stars'}
              className="reviews__rating-label form__rating-label"
              title={el}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleFieldChange}
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled=""
        >
          Submit
        </button>
      </div>
    </form>
  );
};

AddComment.propTypes = {
  id: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (comment) => dispatch(commentPost(comment)),
});

export default connect(null, mapDispatchToProps)(AddComment);
