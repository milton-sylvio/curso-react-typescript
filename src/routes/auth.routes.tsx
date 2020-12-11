import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AuthTemplate from '../templates/Auth';

import SignIn from '../views/Signin';
import SignUp from '../views/Signup';

import { paths } from '../configs/paths';

const AuthRoutes: React.FC = () => (
  <AuthTemplate>
    <Switch>
      <Route path={paths.SIGN_IN.url} component={SignIn} />
      <Route path={paths.SIGN_UP.url} component={SignUp} />
      <Redirect from={paths.DASHBOARD.url} to={paths.SIGN_IN.url} />
    </Switch>
  </AuthTemplate>
);

export default AuthRoutes;
