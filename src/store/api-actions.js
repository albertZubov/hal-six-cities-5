import { ActionCreator } from 'store/action';
import { AuthorizationStatus } from 'const/const';
import { formattingDataServerToClinet, serverAdapter } from 'utils/utils';

export const fetchPlacesList = () => (dispatch, _getState, api) =>
  api.get(`/hotels`).then(({ data }) => {
    const formatData = formattingDataServerToClinet(data);
    dispatch(ActionCreator.loadingHotels(formatData));
    return formatData;
  });

export const checkAuth = () => (dispatch, _getState, api) =>
  api
    .get(`/login`)
    .then(({ data }) => {
      console.log(data);
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
    .post(`/login`, { email, password })
    .then(() =>
      dispatch(ActionCreator.requereAuthorization(AuthorizationStatus.AUTH))
    );
