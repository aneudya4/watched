import { tvshowTypes } from '../actions/action-types';

const initialState = {
  airToday: [],
  onAir: [],
  popular: [],
  topRated: [],
};

export const tvShowsReducer = (state = initialState, action) => {
  switch (action.type) {
    case tvshowTypes.FETCH_TVSHOWS_AIRTODAY:
      return {
        ...state,
        airToday: action.payload,
      };

    case tvshowTypes.FETCH_TVSHOWS_ON_AIR:
      return {
        ...state,
        onAir: action.payload,
      };

    case tvshowTypes.FETCH_TVSHOWS_POPULAR:
      return {
        ...state,
        popular: action.payload,
      };

    case tvshowTypes.FETCH_TOP_RATED_TVSHOWS:
      return {
        ...state,
        topRated: action.payload,
      };

    default:
      return state;
  }
};
