import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './globalSlice'; 
import indexedTokenReducer from './indexedTokenSlice';

const store = configureStore({
  reducer: {
    global: globalReducer,
    indexedToken: indexedTokenReducer
    // Add more reducers as needed
  },
  // Other store configurations can go here (middleware, dev tools, etc.)
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch