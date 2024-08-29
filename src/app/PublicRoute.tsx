import { ReactElement } from 'react';

interface PublicRouteProps {
  element: ReactElement;
}

const PublicRoute = ({ element }: PublicRouteProps) => {
  return element;
};

export default PublicRoute;
