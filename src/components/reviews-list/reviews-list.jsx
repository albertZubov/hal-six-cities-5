import React, { PureComponent } from 'react';
import RewiewsItem from '../reviews-item/reviews-item';

class RewiewsList extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <ul className="reviews__list">
        <RewiewsItem />
      </ul>
    );
  }
}

export default RewiewsList;
