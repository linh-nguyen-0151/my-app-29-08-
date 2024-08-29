import React from 'react';
import { RouteProps } from 'react-router';
import { Route } from 'react-router-dom';

const PublicRoute = ({ children, ...rest }: RouteProps) => {

  return (
    <Route
      {...rest}
      render={() => (<>{children}</>)}
    />
  );
};

export default PublicRoute;
