import {tokenMiddleware, tokenReducer} from './tokenReducer';
import commentsReducer from './comment/commentSlice';
import {authReducer} from './auth/authReducer';
import postsReducer from './posts/postSlice';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    comment: commentsReducer,
    auth: authReducer,
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware)
});
