import {
  GET_MOVIES_FAILED,
  GET_MOVIES_REQUESTED,
  GET_MOVIES_SUCCESS,
  SET_MOVIES_VISIBILITY,
} from "./constants";

export const getMoviesRequested = () => {
  return { type: GET_MOVIES_REQUESTED };
};

export const getMoviesSuccess = (payload) => {
  return { type: GET_MOVIES_SUCCESS, payload: { ...payload } };
};

export const getMoviesFailed = (payload) => {
  return { type: GET_MOVIES_FAILED, payload: { ...payload } };
};

export const setMoviesVisibility = (index, isVisible) => {
  return { type: SET_MOVIES_VISIBILITY, payload: { index, isVisible } };
};
