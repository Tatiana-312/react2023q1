import { configureStore } from '@reduxjs/toolkit';
import searchValueReducer from './searchValueSlice';
import charactersDataReducer from './apiDataSlice';

const store = configureStore({
  reducer: {
    searchValue: searchValueReducer,
    apiData: charactersDataReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
