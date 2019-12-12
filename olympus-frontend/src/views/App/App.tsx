import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Routes } from '../../constants/Routes';
import { Home } from '../Home';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path={Routes.HOME} component={Home} exact={true} />
      <Redirect to={Routes.HOME} />
    </Switch>
  );
};

export default App;
