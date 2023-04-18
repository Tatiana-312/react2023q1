import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import type { Request, Response } from 'express';
import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import Html from '../Html';

export default function render(url: string, options: any) {
  const stream = ReactDOMServer.renderToPipeableStream(
    <StaticRouter location={url}>
      <Provider store={store}>
        {/* <Html> */}
        <App />
        {/* </Html> */}
      </Provider>
    </StaticRouter>,
    options
  );
  return stream;
}

// export function render(req: Request, res: Response) {
//   const { pipe } = ReactDOMServer.renderToPipeableStream(
//     <StaticRouter location={req.originalUrl}>
//       <Provider store={store}>
//         {/* <Html> */}
//         <App />
//         {/* </Html> */}
//       </Provider>
//     </StaticRouter>,
//     {
//       onShellReady() {
//         res.statusCode = 200;
//         res.setHeader('content-type', 'text/html');
//         pipe(res);
//       },
//       onError(err) {
//         console.error(err);
//       },
//     }
//   );
// }
