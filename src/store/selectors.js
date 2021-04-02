import { createSelector } from 'reselect';
import { sortArrOnCities } from '../utils/utils';

export const getOffers = (state) => state.DATA.offers;
export const getActiveCity = (state) => state.PROCESS.activeCity;
export const getActiveTypeSort = (state) => state.PROCESS.activeTypeSort;
export const getActiveCityID = (state) => state.PROCESS.activeCityID;
export const getAuthorizationStatus = (state) => state.USER.authorizationStatus;
export const getUserData = (state) => state.USER.userData;
export const getCommentsData = (state) => state.DATA.comments;
export const getHotelsNearby = (state) => state.DATA.offersNearby;
export const getPlacesList = createSelector(
  [getOffers, getActiveCity],
  (offers, activeCity) => sortArrOnCities(offers)[activeCity]
);
