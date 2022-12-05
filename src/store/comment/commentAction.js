import axios from 'axios';
import {URL_API} from '../../api/const';

export const COMMENT_REQUEST = 'COMMENT_REQUEST';
export const COMMENT_REQUEST_SUCCESS = 'COMMENT_REQUEST_SUCCESS';
export const COMMENT_REQUEST_ERROR = 'COMMENT_REQUEST_ERROR';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';

export const updateComment = comment => ({
  type: UPDATE_COMMENT,
  comment,
});

export const commentRequest = () => ({
  type: COMMENT_REQUEST,
});

export const commentRequestSuccess = ({data, comments}) => ({
  type: COMMENT_REQUEST_SUCCESS,
  data,
  comments,
});

export const commentRequestError = () => ({
  type: COMMENT_REQUEST_ERROR,
});

export const commentRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().token.token;

  dispatch(commentRequest());
  axios(`${URL_API}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({data: [
      {
        data: {
          children: [{data}]
        }
      },
      {
        data: {children}
      }
    ]}) => {
      const comments = children.map(item => item.data);
      dispatch(commentRequestSuccess({data, comments}));
    }
    )
    .catch(() => {
      dispatch(commentRequestError());
    });
};
