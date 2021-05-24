import React from 'react';
import ReviewsItem from '../reviews-item/reviews-item';
import PropTypes from 'prop-types';
import { propsComment } from '../../props/props';

const ReviewsList = (props) => {
  const { comments } = props;
  return (
    <ul className="reviews__list">
      {comments.map((comment, index) => (
        <ReviewsItem comment={comment} key={index} />
      ))}
    </ul>
  );
};

ReviewsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(propsComment)),
};

export default ReviewsList;
