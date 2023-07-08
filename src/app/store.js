import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import candidateReducer from './features/candidateSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    candidate:candidateReducer
  },
});

export default store;
