import {createSlice} from '@reduxjs/toolkit';
import {postsRequestAsync} from './postAction';

const initialState = {
  posts: [],
  loading: false,
  error: '',
  after: '',
  isLast: false,
  page: '',
  count: 0,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload.page;
      state.count = 0;
      state.after = '';
      state.isLast = false;
      state.posts = [];
    },
  },
  extraReducers: {
    [postsRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [postsRequestAsync.fulfilled.type]: (state, action) => {
      if (action.payload.isLast) {
        state.loading = false;
        return;
      }
      state.posts = action.payload.starter ?
       action.payload.posts : [...state.posts, ...action.payload.posts],
      state.count = action.payload.starter ? 0 : state.count + 1;
      state.loading = false;
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
    },
    [postsRequestAsync.rejected.type]: (state) => {
      state.loading = false;
      state.error = '';
      state.count = 0;
      state.posts = [];
    },
  }
});

export default postsSlice.reducer;
