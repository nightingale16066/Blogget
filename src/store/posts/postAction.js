import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {URL_API} from '../../api/const';

export const postsRequestAsync = createAsyncThunk(
  'posts/fetch',
  (newPage, {getState}) => {
    const token = getState().token.token;
    const after_ = getState().posts.after;
    const isLast = getState().posts.isLast;
    const page = getState().posts.page;

    if (!token || isLast) return {isLast};

    return axios(`${URL_API}/${page}?limit=10&${after_ ? `after=${after_}` :
    ''}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(({data: {data: {after, children}}}) => {
        if (after_) {
          return {after, posts: children, starter: false};
        } else {
          return {after, posts: children, starter: true};
        }
      })
      .catch((error) => ({error}));
  }
);

// export const postsRequestAsync2 = (newPage) => (dispatch, getState) => {
//   const page = getState().posts.page;
//   const token = getState().token.token;
//   const after_ = getState().posts.after;
//   const loading = getState().posts.loading;
//   const isLast = getState().posts.isLast;

//   if (!token || loading || isLast) return;

//   dispatch(postsSlice.actions.postsRequest());
//   axios(`${URL_API}/${page}?limit=10&${after_ ? `after=${after_}` : ''}`, {
//     headers: {
//       Authorization: `bearer ${token}`,
//     },
//   })
//     .then(({data: {data: {after, children}}}) => {
//       if (after_) {
//         dispatch(postsSlice.actions
//           .postsRequestSuccessAfter({after, posts: children}));
//       } else {
//         dispatch(postsSlice.actions.postsRequestSuccess({after,
//           posts: children}));
//       }
//     })
//     .catch((error) => {
//       dispatch(postsSlice.actions.postsRequestError({error}));
//     });
// };
