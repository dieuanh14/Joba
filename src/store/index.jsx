// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../store/features/UserSlice';


export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});


