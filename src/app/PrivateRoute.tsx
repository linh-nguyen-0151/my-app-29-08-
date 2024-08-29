import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// hooks
import useSessionStorage from 'hooks/useSessionStorage';

// constants
import { STORAGE_KEYS } from 'constants/common';
import RouteConfig from 'configs/RouteConfig';

interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute = ({ element }: PrivateRouteProps) => {
  const [accessToken] = useSessionStorage(STORAGE_KEYS.ACCESS_TOKEN);
  const location = useLocation();

  if (!accessToken) {
    // Not logged in, redirect to login page with the return url
    return <Navigate to={RouteConfig.LOGIN} state={{ from: location }} />;
  }

  // Authorized, so return the component
  return element;
};

export default PrivateRoute;
