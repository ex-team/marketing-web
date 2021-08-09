import fs from 'fs';
import path from 'path';

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter, StaticRouterContext } from 'react-router';

import App from '../src/App';
import { store } from '../src/app/store';

const PORT = process.env.PORT || 3006;
const app = express();

const staticAssets = fs.readdirSync(path.resolve('./build'));

app.get('*', (req, res, next) => {
  const urlPath = req.url.split('/')[1];
  if (staticAssets.includes(urlPath)) return next();

  const context: StaticRouterContext = {};
  const app = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, content) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(content.replace('<div id="root"></div>', `<div id="root">${app}</div>`));
  });
});

app.use(express.static('./build'));

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
