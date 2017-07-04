import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './containers/App';
import Root from './containers/Root';
import Hotels from './containers/Hotels';
import UserArea from './containers/UserArea';
import NotFound from './containers/NotFound';
import Hotel from './containers/Hotel';
import Countries from './containers/Countries';
import Country from './containers/Country';
import AddCountry from './containers/Admin';

const routes = (
  <Route path="/" component={Root}>
    <Route component={App}>
      <Route component={UserArea}>
        <Route path="hotels" component={Hotels} />
        <Route path="hotel/:id" component={Hotel} />
        <Route path="countries" component={Countries} />
        <Route path="country/:id" component={Country} />
        <Route path="admin" component={AddCountry} />
        <IndexRoute component={Hotels} />
      </Route>
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
