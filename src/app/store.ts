import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { prefsReducer } from './reducers';

export const store = configureStore({
  reducer: {
    counter: prefsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
