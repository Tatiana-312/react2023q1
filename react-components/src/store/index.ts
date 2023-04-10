import { configureStore } from '@reduxjs/toolkit';
import searchValueReducer from './searchValueSlice';
import charactersDataReducer from './charactersDataSlice';

const store = configureStore({
  reducer: {
    searchValue: searchValueReducer,
    charactersData: charactersDataReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
