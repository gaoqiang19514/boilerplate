import { LOAD_REPOS, LOAD_REPOS_SUCCESS, LOAD_REPOS_ERROR } from "./constants";

export function loadRepos() {
  return {
    type: LOAD_REPOS
  };
}

export function reposLoaded(payload) {
  return {
    type: LOAD_REPOS_SUCCESS,
    name: payload
  };
}

export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error
  };
}
