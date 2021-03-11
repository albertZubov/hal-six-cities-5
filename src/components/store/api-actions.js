import { ActionCreator } from '../store/action';
import { AuthorizationStatus } from '../../const/const';

export const fetchPlacesList = () => (dispatch, _getState, api) =>
  api.get(`/hotels`).then(({ data }) => {
    dispatch(ActionCreator.loadingHotels(data));
    return data;
  });

export const checkAuth = () => (dispatch, _getState, api) =>
  api
    .get(`/login`)
    .then((response) => {
      console.log(response);
      dispatch(ActionCreator.requereAuthorization(AuthorizationStatus.AUTH));
    })
    .catch((err) => {
      // throw err;
      console.log(err);
    });

export const login = ({ login: email, password }) => (
  dispatch,
  _getState,
  api
) =>
  api
    .post(`/login`, { email, password })
    .then(() =>
      dispatch(ActionCreator.requereAuthorization(AuthorizationStatus.AUTH))
    );
