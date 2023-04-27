import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import { RootState, setupStore } from './redux/store/store';

declare global {
  interface Window {
    __PRELOADED_STATE__: RootState | undefined;
  }
}

const store = setupStore(window.__PRELOADED_STATE__);

delete window.__PRELOADED_STATE__;

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
