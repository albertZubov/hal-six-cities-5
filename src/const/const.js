export const BtnSortType = {
  POPULAR: 'POPULAR',
  LOW_HIGH: 'LOW_HIGH',
  HIGH_LOW: 'HIGH_LOW',
  RATED_FIRST: 'RATED_FIRST',
};

export const BtnSortTitle = {
  [BtnSortType.POPULAR]: 'Popular',
  [BtnSortType.LOW_HIGH]: 'Price: low to high',
  [BtnSortType.HIGH_LOW]: 'Price: high to low',
  [BtnSortType.RATED_FIRST]: 'Top rated first',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
};

export const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  HOTELS: '/hotels/',
  COMMENTS: '/comments/',
};

export const AppClient = {
  ROOT: '/',
  FAVORITES: '/favorites',
  OFFER_ID: '/offer/:id',
  LOGIN: '/login',
};
