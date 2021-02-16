export const moviesTypes = {
  FETCH_POPULAR_MOVIES: '[MOVIES] FETCH_POPULAR_MOVIES',
  FETCH_MOVIE_IN_THEATERS: '[MOVIES] FETCH_MOVIE_IN_THEATERS',
  FETCH_TOP_RATED_MOVIES: '[MOVIES] FETCH_TOP_RATED_MOVIES',
  FETCH_MOVIES_UPCOMING: '[MOVIES] FETCH_MOVIES_UPCOMING',
  FETCH_MOVIES_GENRES: '[MOVIES] FETCH_MOVIES_GENRES',
  FETCH_SIMILAR_MOVIES: '[MOVIES] FETCH_SIMILAR_MOVIES',
  FETCH_MOVIES_CAST: '[MOVIES] FETCH_MOVIES_CAST',
  FETCH_MOVIE_DETAILS: '[MOVIES] FETCH_MOVIE_DETAILS',
  FETCH_MOVIES_BY_SEARCH: '[MOVIES] FETCH_MOVIES_BY_SEARCH',
  SEARCH_MOVIES_BY_GENRE: '[MOVIES] SEARCH_MOVIES_BY_GENRE',
  SET_MOVIES_CATEGORY: '[MOVIES] SET_MOVIE_CATEGORY',
};

export const tvshowTypes = {
  FETCH_TVSHOWS_POPULAR: '[TV SHOWS] FETCH_TVSHOWS_POPULAR',
  FETCH_TVSHOWS_AIRTODAY: '[TV SHOWS] FETCH_TVSHOWS_AIRTODAY',
  FETCH_TVSHOWS_ON_AIR: '[TV SHOWS] FETCH_TVSHOWS_ON_AIR',
  FETCH_TOP_RATED_TVSHOWS: '[TV SHOWS] FETCH_TOP_RATED_TVSHOWS',
  SET_TVSHOWS_CATEGORY_POPULAR: '[CATEGORIES] SET_TVSHOWS_CATEGORY_POPULAR',
  SET_TVSHOWS_CATEGORY_AIRTODAY: '[CATEGORIES] SET_TVSHOWS_CATEGORY_AIRTODAY',
  SET_TVSHOWS_CATEGORY_ON_AIR: '[CATEGORIES] SET_TVSHOWS_CATEGORY_ON_AIR',
  SET_TVSHOWS_CATEGORY_TOP_RATED: '[CATEGORIES] SET_TVSHOWS_CATEGORY_TOP_RATED',
};

export const loadingTypes = {
  SET_LOADING: '[LOADING] SET_LOADING',
  REMOVE_LOADING: '[LOADING] REMOVE_LOADING',
};

export const errorsTypes = {
  SET_ERROR: '[ERROR] SET_ERROR',
  CLEAR_ERROR: '[ERROR] CLEAR_ERROR',
};

export const watchListTypes = {
  ADD_TO_WATCHLIST: '[WATCHLIST] ADD_TO_WATCHLIST',
  REMOVE_FROM_WATCHLIST: '[WATCHLIST] REMOVE_FROM_WATCHLIST',
  FETCH_FROM_WATCHLIST: '[WATCHLIST] FETCH_FROM_WATCHLIST',
};

export const authTypes = {
  LOG_IN_USER: '[AUTH] LOG_IN_USER',
  LOG_OUT_USER: '[AUTH] LOG_OUT_USER',
  SHOW_HIDE_REGISTER: '[AUTH] SHOW_HIDE_REGISTER',
  SHOW_HIDE_LOGIN: '[AUTH] SHOW_HIDE_LOGIN',
  REGISTER_USER: '[AUTH] REGISTER',
  SHOW_LOGIN: '[AUTH] SHOW_LOGIN',
  SHOW_REGISTER: '[AUTH] SHOW_REGISTER',
  HIDE_LOGIN: '[AUTH] HIDE_LOGIN',
  HIDE_REGISTER: '[AUTH] HIDE_REGISTER',
};
