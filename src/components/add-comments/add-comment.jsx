import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
// import { propsOffers } from '../../props/props';

class AddComment extends PureComponent {
  constructor() {
    super();
    this.titleLabel = [`perfect`, `good`, `not bad`, `badly`, `terribly`];
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.state = {
      rating: '',
      review: '',
    };
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  handleFieldChange(evt) {
    const { value, name } = evt.target;

    evt.preventDefault();
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form
        className="reviews__form form"
        action="#"
        method="post"
        onSubmit={this.handleSubmit}
      >
        <label className="reviews__label form__label" htmlFor="review">
          Your review
        </label>
        <div className="reviews__rating-form form__rating">
          {this.titleLabel.map((el, id, arr) => (
            <React.Fragment key={id}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={arr.length - id}
                id={arr.length - id + '-stars'}
                type="radio"
                onChange={this.handleFieldChange}
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
          onChange={this.handleFieldChange}
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
  }
}

export default AddComment;
