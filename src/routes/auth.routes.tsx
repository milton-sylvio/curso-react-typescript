import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthTemplate from '../templates/Auth';

import SignIn from '../views/Signin';
import SignUp from '../views/Signup';

import { paths } from '../configs/paths';

const AuthRoutes: React.FC = () => (
  <AuthTemplate>
    <Switch>
      <Route exact path={paths.SIGN_IN.url} component={SignIn} />
      <Route exact path={paths.SIGN_UP.url} component={SignUp} />
    </Switch>
  </AuthTemplate>
);

export default AuthRoutes;
