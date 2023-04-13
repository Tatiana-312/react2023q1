import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import { rickAndMortyApi } from './redux/rickAndMortyApi';
import { RenderOptions, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { PropsWithChildren } from 'react';
import React from 'react';
import searchValueReducer from './redux/store/searchValueSlice';
import formCardsDataReducer from './redux/store/formCardsDataSlice';
import modalReducer from './redux/store/modalSlice';

const rootReducer = combineReducers({
  searchValue: searchValueReducer,
  formCardsData: formCardsDataReducer,
  modal: modalReducer,
  [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware),
  });

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        searchValue: searchValueReducer,
        formCardsData: formCardsDataReducer,
        modal: modalReducer,
        [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
      },
      preloadedState,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(rickAndMortyApi.middleware),
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<unknown>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
