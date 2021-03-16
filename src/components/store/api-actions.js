import { ActionCreator } from '../store/action';
import { AuthorizationStatus } from 'const/const';
import { formattingDataServerToClinet } from '../../utils/utils';

export const fetchPlacesList = () => (dispatch, _getState, api) =>
  api.get(`/hotels`).then(({ data }) => {
    const formatData = formattingDataServerToClinet(data);
    dispatch(ActionCreator.loadingHotels(formatData));
    return formatData;
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
      // console.log(err);
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
