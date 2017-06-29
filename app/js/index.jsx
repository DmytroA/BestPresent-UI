import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import '../index.html';
import './main.scss';

function bootstrap() {
  injectTapEventPlugin();
  ReactDOM.render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app'),
  );
}

bootstrap();

