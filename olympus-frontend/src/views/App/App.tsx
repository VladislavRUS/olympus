import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Routes } from '../../constants/Routes';
import { Home } from '../Home';
import { Main } from '../Main';
import { PrivateRoute } from './PrivateRoute';

const App: React.FC = () => {
  return (
    <Switch>
      <PrivateRoute path={Routes.MAIN} component={Main} />
      <Route path={Routes.HOME} component={Home} exact={true} />
      <Redirect to={Routes.HOME} />
    </Switch>
  );
};

export default App;
