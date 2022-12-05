import axios from 'axios';
import {URL_API} from '../../api/const';

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';

export const postsRequest = () => ({
  type: POSTS_REQUEST,
});

export const postsRequestSucces = (posts) => ({
  type: POSTS_REQUEST_SUCCESS,
  posts,
});

export const postsRequestError = (error) => ({
  type: POSTS_REQUEST_ERROR,
  error,
});

export const postsRequestAsync = () => (dispatch, getState) => {
  const token = getState().token.token;
  if (!token) return;

  dispatch(postsRequest());
  axios(`${URL_API}/best?limit=20`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    // .then((response) => {
    //   if (response.redirected) {
    //     return [];
    //   }
    //   if (response.status === 401) {
    //     throw new Error(response.status);
    //   }
    //   return response.json();
    // })
    .then(({data: {data: {children}}}) => {
      console.log('data: ', children);
      // data && setPosts([...data.children]);
      dispatch(postsRequestSucces(children));
    })
    .catch((err) => {
      console.error(err);
      dispatch(postsRequestError(err));
    });
};
