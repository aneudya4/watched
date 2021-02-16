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
      await dispatch(await fetchMoviesByCategory('top_rated'));
      await dispatch(await fetchMoviesByCategory('popular'));
      await dispatch(await fetchTvShowsByCategory('popular'));
      await dispatch(await fetchTvShowsByCategory('top_rated'));
      await dispatch(await fetchMoviesGenres());

      await dispatch(clearErrorMsg());
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

  return setMoviesCategory(category, response.data.results);
};

export const fetchTvShowsByCategory = async (category) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/tv/${category}?api_key=d35dda56d61ee0678a341b8d5c804efc&language=en-US&page=1`,
  );

  return setTvShowsCategory(category, response.data.results);
};

export const fetchSimilarMovies = (movieId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=d35dda56d61ee0678a341b8d5c804efc&language=en-US&page=1`,
      );

      dispatch({
        type: moviesTypes.FETCH_SIMILAR_MOVIES,
        payload: response.data.results,
      });
    } catch (error) {
      dispatch(removeLoading());

      dispatch({
        type: errorsTypes.SET_ERROR,
        payload: error.message,
      });
    }
  };
};

export const fetchMovieCast = (movieId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=d35dda56d61ee0678a341b8d5c804efc&language=en-US`,
      );

      const filteredCastList = await response.data.cast.filter(
        (c, i) => i <= 30,
      );

      dispatch({
        type: moviesTypes.FETCH_MOVIES_CAST,
        payload: filteredCastList,
      });
    } catch (error) {
      dispatch(removeLoading());

      dispatch({
        type: errorsTypes.SET_ERROR,
        payload: error.message,
      });
    }
  };
};

export const fetchMoviesGenres = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/genre/movie/list?api_key=d35dda56d61ee0678a341b8d5c804efc&language=en-US',
  );

  return {
    type: moviesTypes.FETCH_MOVIES_GENRES,
    payload: response.data.genres,
  };
};

export const fetchMoviesByGenres = (genreId) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=d35dda56d61ee0678a341b8d5c804efc&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`,
      );

      dispatch({
        type: moviesTypes.FETCH_MOVIES_BY_SEARCH,
        payload: response.data.results,
      });
      dispatch(removeLoading());
    } catch (error) {
      dispatch(removeLoading());

      dispatch({
        type: errorsTypes.SET_ERROR,
        payload: error.message,
      });
    }
  };
};

export const fetchMovieBySearchTerm = (searchTerm) => {
  return async (dispatch) => {
    dispatch(setLoading());

    try {
      if (searchTerm.trim() === '') {
        throw new Error('Input cant be empty');
      }
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=d35dda56d61ee0678a341b8d5c804efc&language=en-US&query=${searchTerm}&page=1&include_adult=false`,
      );
      dispatch({
        type: moviesTypes.FETCH_MOVIES_BY_SEARCH,
        payload: response.data.results,
      });
      dispatch(removeLoading());
    } catch (error) {
      dispatch(removeLoading());
      console.log(error.message);
    }
  };
};

export const setMoviesCategory = (category, data) => {
  if (category === 'popular') {
    return {
      type: moviesTypes.FETCH_POPULAR_MOVIES,
      payload: data,
    };
  } else if (category === 'top_rated') {
    return {
      type: moviesTypes.FETCH_TOP_RATED_MOVIES,
      payload: data,
    };
  } else if (category === 'now_playing') {
    return {
      type: moviesTypes.FETCH_MOVIE_IN_THEATERS,
      payload: data,
    };
  } else {
    return {
      type: moviesTypes.FETCH_MOVIES_UPCOMING,
      payload: data,
    };
  }
};

export const setTvShowsCategory = (category, data) => {
  if (category === 'popular') {
    return {
      type: tvshowTypes.FETCH_TVSHOWS_POPULAR,
      payload: data,
    };
  } else if (category === 'top_rated') {
    return {
      type: tvshowTypes.FETCH_TOP_RATED_TVSHOWS,
      payload: data,
    };
  } else if (category === 'airing_today') {
    return {
      type: tvshowTypes.FETCH_TVSHOWS_AIRTODAY,
      payload: data,
    };
  } else {
    return {
      type: tvshowTypes.FETCH_TVSHOWS_ON_AIR,
      payload: data,
    };
  }
};
