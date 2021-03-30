import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { commentPost } from '../../src/store/api-actions';

const withAddComment = (Component) => {
  class withAddComment extends PureComponent {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);
      this.state = {
        rating: 0,
        review: '',
      };
    }

    handleSubmit(evt) {
      const { id } = this.props;
      const { rating, review } = this.state;
      evt.preventDefault();
      this.props.onSubmit({
        description: review,
        rating,
        id,
      });
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
        <Component
          handleSubmit={this.handleSubmit}
          handleFieldChange={this.handleFieldChange}
        />
      );
    }
  }

  withAddComment.propTypes = {
    id: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  const mapDispatchToProps = (dispatch) => ({
    onSubmit: (comment) => dispatch(commentPost(comment)),
  });

  return connect(null, mapDispatchToProps)(withAddComment);
};

export default withAddComment;
