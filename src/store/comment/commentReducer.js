import {
  COMMENT_REQUEST,
  COMMENT_REQUEST_SUCCESS,
  COMMENT_REQUEST_ERROR,
  UPDATE_COMMENT,
} from './commentAction';

const initialState = {
  post: '',
  comments: [],
  status: '',
  comment: '',
};

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_REQUEST:
      return {
        ...state,
        status: 'loading',
      };
    case COMMENT_REQUEST_SUCCESS:
      return {
        ...state,
        status: 'loaded',
        post: action.data,
        comments: action.comments,
      };
    case COMMENT_REQUEST_ERROR:
      return {
        ...state,
        status: 'error',
      };
    case UPDATE_COMMENT:
      return {
        ...state,
        comment: action.comment
      };
    default:
      return state;
  }
};
