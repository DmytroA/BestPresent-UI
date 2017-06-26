﻿import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './containers/App';
import Root from './containers/Root';
import Home from './containers/Home';
import UserArea from './containers/UserArea';
import NotFound from './containers/NotFound';
import Hotel from './containers/Hotel';

const routes = (
  <Route path="/" component={Root}>
    <Route component={App}>
      <Route component={UserArea}>
        <Route path="home" component={Home} />
        <Route path="hotel/:id" component={Hotel} />
        <IndexRoute component={Home} />
      </Route>
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
