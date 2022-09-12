import axios from "axios";
import { takeLatest, call, put } from "redux-saga/effects";
import { VIDEO_API } from "../utilities/api";
import { getMoviesFailed, getMoviesSuccess } from "./actions";
import { GET_MOVIES_REQUESTED } from "./constants";
function* getMoviesInfoWorker() {
  try {
    const getMoviesInfoRequest = yield call(() => {
      return axios.get(VIDEO_API);
    });
    yield put(
      getMoviesSuccess({
        videos: getMoviesInfoRequest?.data?.data,
      })
    );
  } catch (error) {
    yield put(
      getMoviesFailed({
        hasError: true,
        errorMessage: error.response.data.message,
      })
    );
    yield put(
      getMoviesFailed({
        hasError: false,
      })
    );
  }
}
function* getMoviesInfoWatcher() {
  yield takeLatest(GET_MOVIES_REQUESTED, getMoviesInfoWorker);
}

export default getMoviesInfoWatcher;
