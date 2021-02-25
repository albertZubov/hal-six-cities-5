import React from 'react';
import PropTypes from 'prop-types';

const AddComment = (props) => {
  const titleLabel = [`perfect`, `good`, `not bad`, `badly`, `terribly`];
  const { handleSubmit, handleFieldChange } = props;

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
        {titleLabel.map((el, id, arr) => (
          <React.Fragment key={id}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={arr.length - id}
              id={arr.length - id + '-stars'}
              type="radio"
              onChange={handleFieldChange}
            />
            <label
              htmlFor={arr.length - id + '-stars'}
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
  handleSubmit: PropTypes.func.isRequired,
  handleFieldChange: PropTypes.func.isRequired,
};

export default AddComment;
