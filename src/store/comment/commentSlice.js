import {createSlice} from '@reduxjs/toolkit';
import {commentRequestAsync} from './commentAction';

const initialState = {
  post: '',
  comments: [],
  status: '',
  comment: '',
  error: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    updateComment: (state, action) => {
      state.comment = action.payload.comment;
    }
  },
  extraReducers: {
    [commentRequestAsync.pending.type]: (state) => {
      state.error = '';
      state.status = 'loading';
    },
    [commentRequestAsync.fulfilled.type]: (state, action) => {
      state.status = 'loaded';
      state.error = '';
      state.post = action.payload.data;
      state.comments = action.payload.comments;
    },
    [commentRequestAsync.rejected.type]: (state, action) => {
      state.error = action.payload.error;
      state.status = 'error';
    },
  }
});

export default commentsSlice.reducer;
