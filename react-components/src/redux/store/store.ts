import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import searchValueReducer from './searchValueSlice';
import formCardsDataReducer from './formCardsDataSlice';
import modalReducer from './modalSlice';
import { rickAndMortyApi } from '../rickAndMortyApi';

const rootReducer = combineReducers({
  searchValue: searchValueReducer,
  formCardsData: formCardsDataReducer,
  modal: modalReducer,
  [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware),
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware),
    preloadedState,
  });
};

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
