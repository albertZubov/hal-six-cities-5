import React, { PureComponent } from 'react';
import ReviewsItem from '../reviews-item/reviews-item';
import PropTypes from 'prop-types';
import { propsComment } from '../../props/props';

class ReviewsList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { comments } = this.props;
    return (
      <ul className="reviews__list">
        {comments.map((comment, index) => (
          <ReviewsItem comment={comment} key={index} />
        ))}
      </ul>
    );
  }
}

ReviewsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(propsComment)),
};

export default ReviewsList;
