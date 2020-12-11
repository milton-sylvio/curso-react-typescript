import React from 'react';
import { Switch, Route } from 'react-router-dom';

import InternalPagesTemplate from '../templates/InternalPages';

import Dashboard from '../views/Dashboard';
import List from '../views/List';
import NewRegister from '../views/NewRegister';

import { paths } from '../configs/paths';

const AppRoutes: React.FC = () => (
  <InternalPagesTemplate>
    <Switch>
      <Route path={paths.DASHBOARD.url} exact component={Dashboard} />
      <Route path="/listagem/:type" component={List} />
      <Route path={paths.NEW_REGISTER.url} exact component={NewRegister} />
    </Switch>
  </InternalPagesTemplate>
);

export default AppRoutes;