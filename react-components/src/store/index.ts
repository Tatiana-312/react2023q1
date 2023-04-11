import { configureStore } from '@reduxjs/toolkit';
import searchValueReducer from './searchValueSlice';
import charactersDataReducer from './apiDataSlice';
import formCardsDataReducer from './formCardsDataSlice';

const store = configureStore({
  reducer: {
    searchValue: searchValueReducer,
    apiData: charactersDataReducer,
    formCardsData: formCardsDataReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
