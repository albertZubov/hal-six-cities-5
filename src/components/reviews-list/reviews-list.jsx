import React, { PureComponent } from 'react';
import RewiewsItem from '../reviews-item/reviews-item';
// import PropTypes from 'prop-types';
// import { propsOffers } from '../../props/props';

class RewiewsList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { comments } = this.props;
    return (
      <ul className="reviews__list">
        {comments.map((comment, index) => (
          <RewiewsItem comment={comment} key={index} />
        ))}
      </ul>
    );
  }
}

export default RewiewsList;
