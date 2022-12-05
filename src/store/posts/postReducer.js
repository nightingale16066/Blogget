import {
  POSTS_REQUEST,
  POSTS_REQUEST_SUCCESS,
  POSTS_REQUEST_ERROR
} from './postAction';

const initialState = {
  posts: [],
  loading: false,
  error: '',
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        loading: false,
        error: '',
      };
    case POSTS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
