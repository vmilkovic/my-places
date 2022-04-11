import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import placeReducer from './place';

export const store = configureStore({
  reducer: {
    user: userReducer,
    place: placeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
