import Routes from './routes';
import ReactEngineClient from 'react-engine/lib/client';

const options = {
  routes: Routes,
  viewResolver: viewName => require('./views/' + viewName)
};

document.addEventListener('DOMContentLoaded', function onLoad() {
  ReactEngineClient.boot(options);
});
