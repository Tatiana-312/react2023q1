import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/store';

export const render = (url: string, options: object) => {
  return ReactDOMServer.renderToPipeableStream(
    <StaticRouter location={url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>,
    options
  );
};
