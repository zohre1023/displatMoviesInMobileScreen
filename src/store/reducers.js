import {
  GET_MOVIES_FAILED,
  GET_MOVIES_SUCCESS,
  SET_MOVIES_VISIBILITY,
} from "./constants";
const initState = {
  videos: [],
  visibleVideos: [],
};

const usersReducer = (state = initState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case GET_MOVIES_SUCCESS:
    case GET_MOVIES_FAILED:
      newState.videos = action.payload.videos;
      break;
    case SET_MOVIES_VISIBILITY:
      const newVisibleVideos = [...newState.visibleVideos];
      const foundVisibleVideoIndex = newVisibleVideos.findIndex(
        (index) => index === action.payload.index
      );
      if (action.payload.isVisible && foundVisibleVideoIndex < 0) {
        newVisibleVideos.push(action.payload.index);
      } else if (!action.payload.isVisible && foundVisibleVideoIndex > -1) {
        newVisibleVideos.splice(foundVisibleVideoIndex, 1);
      }
      newState.visibleVideos = newVisibleVideos.sort((a, b) => b - a);
      break;
    default:
      break;
  }
  return newState;
};
export default usersReducer;
