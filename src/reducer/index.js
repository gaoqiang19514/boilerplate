import { LOAD_REPOS, LOAD_REPOS_SUCCESS, LOAD_REPOS_ERROR } from "../constants";

const initialState = {
  loading: false,
  error: false,
  name: "tom"
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS:
      return {
        ...state,
        error: false,
        loading: true,
      }
    case LOAD_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        name: action.name
      };
    case LOAD_REPOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state;
  }
}