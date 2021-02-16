import {
  loadingTypes,
  errorsTypes,
  moviesTypes,
  authTypes,
  watchListTypes,
} from '../actions/action-types';
import axios from 'axios';
import config from '../../config';
import firebaseApp from '../../firebase';
export const initFetch = () => {
  return async (dispatch) => {
    try {
      await dispatch(setLoading());
      await dispatch(await fetchMoviesByCategory('top_rated'));
      await dispatch(await fetchMoviesByCategory('popular'));
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

export const fetchMovieDetails = (movieId) => {
  return async (dispatch) => {
    await dispatch(setLoading());

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=d35dda56d61ee0678a341b8d5c804efc&language=en-US`,
      );

      dispatch({
        type: moviesTypes.FETCH_MOVIE_DETAILS,
        payload: response.data,
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
      dispatch({
        type: errorsTypes.SET_ERROR,
        payload: error.message,
      });
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

export const removeFromWatchlist = (movieId) => {
  return async (dispatch, getState) => {
    const auth = getState().auth;
    try {
      await axios.delete(`${config.API_ENDPOINT}${movieId}/${auth.user.uid}`, {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${config.API_KEY}`,
        },
      });
      dispatch({
        type: watchListTypes.REMOVE_FROM_WATCHLIST,
        payload: movieId,
      });
    } catch (error) {
      dispatch({
        type: errorsTypes.SET_ERROR,
        payload: error.message,
      });
    }
  };
};

export const addToWatchlist = (movie) => {
  return async (dispatch, getState) => {
    const auth = getState().auth;
    try {
      await axios.post(`${config.API_ENDPOINT}${auth.user.uid}`, movie, {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${config.API_KEY}`,
        },
      });
      dispatch({
        type: watchListTypes.ADD_TO_WATCHLIST,
        payload: movie,
      });
    } catch (error) {
      dispatch({
        type: errorsTypes.SET_ERROR,
        payload: error.message,
      });
    }
  };
};

export const fetchWatchlist = () => {
  return async (dispatch, getState) => {
    const auth = getState().auth;
    await dispatch(setLoading());

    try {
      const response = await axios.get(
        `${config.API_ENDPOINT}${auth.user.uid}`,
        {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${config.API_KEY}`,
          },
        },
      );
      dispatch({
        type: watchListTypes.FETCH_FROM_WATCHLIST,
        payload: response.data,
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

export const loginWithEmailAndPassword = (email, password, history) => {
  return async (dispatch) => {
    try {
      await firebaseApp
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userData) => dispatch(loginUser(userData)));
      await history.push('/auth/dashboard/media');
    } catch (error) {
      dispatch({
        type: errorsTypes.SET_ERROR,
        payload: error.code,
      });
    }
  };
};

export const registerUser = (name, email, password, history) => {
  return async (dispatch) => {
    try {
      await firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((result) => {
          result.user.updateProfile({
            displayName: name,
          });
          dispatch({ type: 'REGISTER_USER', payload: result });
        });
      await history.push('/auth/dashboard/media');
    } catch (error) {
      dispatch({
        type: errorsTypes.SET_ERROR,
        payload: error.message,
      });
    }
  };
};
export const loginUser = (userData) => {
  return { type: authTypes.LOG_IN_USER, payload: userData };
};

export const logoutUser = () => {
  return async (dispatch) => {
    try {
      firebaseApp
        .auth()
        .signOut()
        .then(() => {
          dispatch({ type: authTypes.LOG_OUT_USER });
        });
    } catch (error) {
      dispatch({
        type: errorsTypes.SET_ERROR,
        payload: error.message,
      });
    }
  };
};

export const showHideAuthModal = (authForm) => {
  if (authForm === 'login') {
    return {
      type: authTypes.SHOW_HIDE_LOGIN,
    };
  }
  return {
    type: authTypes.SHOW_HIDE_REGISTER,
  };
};
