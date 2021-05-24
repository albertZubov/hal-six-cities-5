import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AuthorizationStatus, AppRoute } from '../../const/const';
import { getAuthorizationStatus } from 'store/selectors';

const PrivateSignIn = (props) => {
  const { render, path, exact, authorizationStatus } = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={() =>
        authorizationStatus === AuthorizationStatus.NO_AUTH ? (
          render()
        ) : (
          <Redirect to={AppRoute.ROOT} />
        )
      }
    />
  );
};

PrivateSignIn.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export default connect(mapStateToProps)(PrivateSignIn);
