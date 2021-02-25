import React, { PureComponent } from 'react';

const withAddComment = (Component) => {
  class withAddComment extends PureComponent {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);
      this.state = {
        rating: 0,
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
      const { rating, review } = this.state;
      return (
        <Component
          rating={rating}
          review={review}
          handleSubmit={this.handleSubmit}
          handleFieldChange={this.handleFieldChange}
        />
      );
    }
  }

  return withAddComment;
};

export default withAddComment;
