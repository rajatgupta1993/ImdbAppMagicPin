import { call, put, takeEvery, all } from "redux-saga/effects";
import { saveHomeData, saveSearchResults, startLoading, stopLoading } from "../actions/actions";
import * as actions from '../common/actionTypes';
import * as api from '../common/api';

export function* fetchData() {
  yield put(startLoading());
  let data = yield call(api.getHomeData);
  yield put(stopLoading());
  yield put(saveHomeData(data));
}

export function* searchMovie(action) {
  yield put(startLoading());
  let data = yield call(api.searchMovie,action.data);
  yield put(stopLoading());
  yield put(saveSearchResults(data));
}

export function* watchActions() {
  yield takeEvery(actions.FETCH_HOME_DATA, fetchData);
  yield takeEvery(actions.SEARCH_MOVIE, searchMovie);
}

export default function* rootSaga() {
  yield all([
    watchActions(),
  ]);
}
