import { types } from '../actions/action-types';

export const fetchMediaStart = (mediaType) => {
  return async (dispatch) => {
    dispatch({
      type: types.FETCH_MEDIA_START,
    });

    if (mediaType === 'movies') {
      // write fetch request
      // const response =  await fetch()
      // dispatch(fetchMovieMedia(response))
    } else {
      // write fetch request
      // const response =  await fetch()
      // dispatch(fetchTvshowsMedia(response))
    }
  };
};

export const fetchMovieMedia = (media) => {
  return {
    type: types.FETCH_MEDIA_MOVIES_SUCCESS,
    payload: media,
  };
};

export const fetchTvshowsMedia = (media) => {
  return {
    type: types.FETCH_MEDIA_TVSHOWS_SUCCESS,
    payload: media,
  };
};
