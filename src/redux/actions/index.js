import { types } from '../actions/action-types';

export const fetchMediaStart = (mediaType) => {
  return async (dispatch) => {
    dispatch({
      type: types.FETCH_MEDIA_START,
    });

    try {
      if (mediaType) {
        // write fetch request
        // const response =  await fetch(moviesURL)
        // dispatch(fetchMedia(response))
      } else {
        // write fetch request
        // const response =  await fetch(tvshowsURL)
        // dispatch(fetchMedia(response))
      }
    } catch (error) {
      dispatch({
        type: types.FETCH_MEDIA_FAIL,
        payload: error.message,
      });
    }
  };
};

export const fetchMedia = (media) => {
  return {
    type: types.FETCH_MEDIA_SUCCESS,
    payload: media,
  };
};
