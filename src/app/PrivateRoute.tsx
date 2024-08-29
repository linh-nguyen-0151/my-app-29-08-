import React from 'react';
import { RouteProps } from 'react-router';
import { Redirect, Route } from 'react-router-dom';

// hooks
import useSessionStorage from 'hooks/useSessionStorage';

// constants
import { STORAGE_KEYS } from 'constants/common';
import RouteConfig from 'configs/RouteConfig';

const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const [accessToken, _] = useSessionStorage(STORAGE_KEYS.ACCESS_TOKEN);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!accessToken) {
          // not logged in so redirect to login page with the return url
          return <Redirect to={{ pathname: RouteConfig.LOGIN, state: { from: props.location } }} />;
        }

        // authorised so return component
        return <>{children}</>;
      }}
    />
  );
};

export default PrivateRoute;
