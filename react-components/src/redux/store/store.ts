import { configureStore } from '@reduxjs/toolkit';
import searchValueReducer from './searchValueSlice';
import formCardsDataReducer from './formCardsDataSlice';
import { rickAndMortyApi } from '../rickAndMortyApi';

const store = configureStore({
  reducer: {
    searchValue: searchValueReducer,
    formCardsData: formCardsDataReducer,
    [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware)
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
