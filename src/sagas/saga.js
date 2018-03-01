import { call, put, takeEvery, all } from "redux-saga/effects";
import { saveHomeData, saveSearchResults } from "../actions/actions";
import * as actions from '../common/actionTypes';
import * as api from '../common/api';

export function* fetchData() {
  let data = yield call(api.getHomeData);
  yield put(saveHomeData(data));
}

export function* searchMovie(action) {
  let data = yield call(api.searchMovie,action.data);
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
