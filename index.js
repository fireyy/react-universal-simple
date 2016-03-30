require('babel-register')({
  presets: ['es2015', 'react']
});

const express = require('express');
const ReactEngine = require('react-engine');
const path = require('path');
const http = require('http');

// Config
const PORT = 3031;
const APP_PATH = path.join(__dirname, '/app');
const ROUTE_FILE_PATH = './app/routes.js';
const VIEWS_PATH = path.join(APP_PATH, '/views');

const routes = require(ROUTE_FILE_PATH);
const items = require('./fake/data.json');

const app = express();

const engine = ReactEngine.server.create({
  routes: routes,
  routesFilePath: path.join(__dirname, ROUTE_FILE_PATH),
  performanceCollector: function(stats) {
    console.log(stats);
  }
});

app.engine('.jsx', engine);

app.set('views', VIEWS_PATH);
app.set('view engine', 'jsx');
app.set('view', ReactEngine.expressView);
app.use(express.static(APP_PATH));

app.get('*', function(req, res) {
  // http://netflixroulette.net/api/api.php?director=Quentin%20Tarantino
  res.render(req.url, {
    items: items
  });
});

app.use(function(err, req, res, next) {
  console.error(err);

  if (res.headersSent) {
    return next(err);
  }

  if (err._type && err._type === ReactEngine.reactRouterServerErrors.MATCH_REDIRECT) {
    return res.redirect(302, err.redirectLocation);
  }
  else if (err._type && err._type === ReactEngine.reactRouterServerErrors.MATCH_NOT_FOUND) {
    return res.status(404).send('Route Not Found!');
  }
  else {
    return res.status(500).send(err.message);
  }
});

const server = app.listen(PORT, function() {
  console.log('Example app listening at http://localhost:%s', PORT);
});
