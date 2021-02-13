export const moviesTypes = {
  FETCH_POPULAR_MOVIES: '[MOVIES] FETCH_POPULAR_MOVIES',
  FETCH_MOVIE_IN_THEATERS: '[MOVIES] FETCH_MOVIE_IN_THEATERS',
  FETCH_TOP_RATED_MOVIES: '[MOVIES] FETCH_TOP_RATED_MOVIES',
  FETCH_MOVIES_UPCOMING: '[MOVIES] FETCH_MOVIES_UPCOMING',
};

export const tvshowTypes = {
  FETCH_TVSHOWS_POPULAR: '[TV SHOWS] FETCH_TVSHOWS_POPULAR',
  FETCH_TVSHOWS_AIRTODAY: '[TV SHOWS] FETCH_TVSHOWS_AIRTODAY',
  FETCH_TVSHOWS_ON_AIR: '[TV SHOWS] FETCH_TVSHOWS_ON_AIR',
  FETCH_TOP_RATED_TVSHOWS: '[TV SHOWS] FETCH_TOP_RATED_TVSHOWS',
};

export const loadingTypes = {
  SET_LOADING: '[LOADING] SET_LOADING',
  REMOVE_LOADING: '[LOADING] REMOVE_LOADING',
};

export const errorsTypes = {
  SET_ERROR: '[ERROR] SET_ERROR',
  CLEAR_ERROR: '[ERROR] CLEAR_ERROR',
};
