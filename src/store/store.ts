import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; 

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add more reducers as needed
  },
  // Other store configurations can go here (middleware, dev tools, etc.)
});

export default store;
