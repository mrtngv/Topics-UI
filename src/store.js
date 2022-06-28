import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import themeReducer from './features/theme/themeSlice';
// import keyReducer from './features/auth/authenticationSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    // key: keyReducer // not in use.
  },
})