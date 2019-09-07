import { LOAD_REPOS, LOAD_REPOS_SUCCESS, LOAD_REPOS_ERROR } from "./constants";
import { getRepos as apiGetRepos } from './api'

export function loadRepos() {
  return {
    type: LOAD_REPOS
  };
}

export function reposLoaded(name) {
  return {
    type: LOAD_REPOS_SUCCESS,
    name
  };
}

export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error
  };
}

export function getRepos(name) {
  return dispatch => {
    dispatch(loadRepos());
    apiGetRepos()
      .then(res => res.data)
      .then((res) => {
        dispatch(reposLoaded(res.data));
      })
      .catch((err) => {
        dispatch(repoLoadingError(err));
      })
  };
}
