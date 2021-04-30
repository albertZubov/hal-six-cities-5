import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthorizationStatus } from 'const/const';
import { getAuthorizationStatus } from 'store/selectors';

const PrivateComponent = (props) => {
  const { render, authorizationStatus } = props;

  return authorizationStatus === AuthorizationStatus.NO_AUTH ? (
    <Link to={'/login'}>{render()}</Link>
  ) : (
    render()
  );
};

PrivateComponent.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export default connect(mapStateToProps)(PrivateComponent);
