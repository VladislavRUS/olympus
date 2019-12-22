import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Routes } from '../../../constants/Routes';

const PrivateRoute = ({ component, ...rest }: any) => {
  const routeComponent = (props: any) =>
    localStorage.getItem('access_token') ? React.createElement(component, props) : <Redirect to={Routes.HOME} />;
  return <Route {...rest} render={routeComponent} />;
};

export default PrivateRoute;
