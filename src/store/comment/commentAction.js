import axios from 'axios';
import {URL_API} from '../../api/const';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const commentRequestAsync = createAsyncThunk(
  'comments/fetch',
  (id, {getState}) => {
    const token = getState().token.token;
    if (!token) return;

    return axios(`${URL_API}/comments/${id}`, {
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
        return {data, comments};
      },
      )
      .catch((error) => ({error}));
  }
);
