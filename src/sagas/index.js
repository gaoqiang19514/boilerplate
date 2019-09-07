import { call, put, takeEvery } from "redux-saga/effects";

import { LOAD_REPOS, LOAD_REPOS_SUCCESS, LOAD_REPOS_ERROR } from "../constants";
import { getRepos as apiGetRepos } from "../api";

export function* getRepos() {
  try {
    const { data } = yield call(apiGetRepos);
    yield put({ type: LOAD_REPOS_SUCCESS, name: data.data });
  } catch (err) {
    yield put({ type: LOAD_REPOS_ERROR, err });
  }
}

export default function* rootSaga() {
  yield takeEvery(LOAD_REPOS, getRepos);
}
