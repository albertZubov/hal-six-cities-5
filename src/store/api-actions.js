import { ActionCreator } from 'store/action';
import { AppRoute, AuthorizationStatus } from 'const/const';
import { formattingDataServerToClinet, serverAdapter } from 'utils/utils';

export const fetchPlacesList = () => (dispatch, _getState, api) =>
  api.get(AppRoute.HOTELS).then(({ data }) => {
    const formatData = formattingDataServerToClinet(data);
    dispatch(ActionCreator.loadingHotels(formatData));
    return formatData;
  });

export const checkAuth = () => (dispatch, _getState, api) =>
  api
    .get(AppRoute.LOGIN)
    .then(({ data }) => {
      dispatch(ActionCreator.requereAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.loadUserData(serverAdapter(data)));
    })
    .catch((err) => {
      // throw err;
      console.log('meow');
    });

export const login = ({ login: email, password: password }) => (
  dispatch,
  _getState,
  api
) =>
  api
    .post(AppRoute.LOGIN, { email, password })
    .then(() =>
      dispatch(ActionCreator.requereAuthorization(AuthorizationStatus.AUTH))
    )
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)));

export const commentPost = ({
  description: comment,
  rating: rating,
  id: commentId,
}) => (dispatch, _getState, api) =>
  api
    .post(AppRoute.COMMENTS + commentId, { comment, rating })
    .then(({ data }) =>
      dispatch(ActionCreator.loadComments(data.map(serverAdapter)))
    );

export const commentGet = (id) => (dispatch, _getState, api) =>
  api
    .get(AppRoute.COMMENTS + id)
    .then(({ data }) =>
      dispatch(ActionCreator.loadComments(data.map(serverAdapter)))
    );
