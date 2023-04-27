import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import React from 'react';
import { Provider } from 'react-redux';

import { rickAndMortyApi } from './redux/rickAndMortyApi';
import { setupStore } from './redux/store/store';

export const render = async (url: string, options: object) => {
  const store = setupStore();

  store.dispatch(rickAndMortyApi.endpoints.getCharacters.initiate(''));
  await Promise.all(store.dispatch(rickAndMortyApi.util.getRunningQueriesThunk()));

  return [
    ReactDOMServer.renderToPipeableStream(
      <StaticRouter location={url}>
        <Provider store={store}>
          <App />
        </Provider>
      </StaticRouter>,
      options
    ),
    store,
  ];
};
