import { configureStore } from '@reduxjs/toolkit';
import searchValueReducer from './searchValueSlice';
import formCardsDataReducer from './formCardsDataSlice';
import modalReducer from './modalSlice';
import { rickAndMortyApi } from '../rickAndMortyApi';

const store = configureStore({
  reducer: {
    searchValue: searchValueReducer,
    formCardsData: formCardsDataReducer,
    modal: modalReducer,
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
