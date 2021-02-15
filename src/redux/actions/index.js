import {
  loadingTypes,
  errorsTypes,
  moviesTypes,
  tvshowTypes,
} from '../actions/action-types';
import axios from 'axios';

export const initFetch = () => {
  return async (dispatch) => {
    try {
      await dispatch(setLoading());
      const popularMovies = await fetchMoviesByCategory('popular');
      const topRatedMovies = await fetchMoviesByCategory('top_rated');
      const popularTvShows = await fetchTvShowsByCategory('popular');
      const topRatedTvShows = await fetchTvShowsByCategory('top_rated');

      await dispatch({
        type: moviesTypes.FETCH_POPULAR_MOVIES,
        payload: popularMovies,
      });
      await dispatch({
        type: moviesTypes.FETCH_TOP_RATED_MOVIES,
        payload: topRatedMovies,
      });

      await dispatch({
        type: tvshowTypes.FETCH_TVSHOWS_POPULAR,
        payload: popularTvShows,
      });
      await dispatch({
        type: tvshowTypes.FETCH_TOP_RATED_TVSHOWS,
        payload: topRatedTvShows,
      });

      await dispatch(removeLoading());
    } catch (error) {
      dispatch(removeLoading());
      dispatch(setErrorMsg(error.message));
    }
  };
};

export const setLoading = () => {
  return {
    type: loadingTypes.SET_LOADING,
  };
};

export const removeLoading = () => {
  return {
    type: loadingTypes.REMOVE_LOADING,
  };
};

export const setErrorMsg = (errMsg) => {
  return {
    type: errorsTypes.SET_ERROR,
    payload: errMsg,
  };
};

export const clearErrorMsg = () => {
  return {
    type: errorsTypes.CLEAR_ERROR,
  };
};

export const fetchMoviesByCategory = async (category) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${category}?api_key=d35dda56d61ee0678a341b8d5c804efc&language=en-US&page=1`,
  );

  return await response.data.results;
};

export const fetchTvShowsByCategory = async (category) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/tv/${category}?api_key=d35dda56d61ee0678a341b8d5c804efc&language=en-US&page=1`,
  );

  return await response.data.results;
};
