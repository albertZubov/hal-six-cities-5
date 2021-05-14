import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthorizationStatus } from 'const/const';
import { getAuthorizationStatus } from 'store/selectors';

const PrivateComponent = (props) => {
  const { authorizationStatus, children } = props;

  return authorizationStatus === AuthorizationStatus.NO_AUTH ? (
    <Link to={'/login'}>{children}</Link>
  ) : (
    children
  );
};

PrivateComponent.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export default connect(mapStateToProps)(PrivateComponent);
