import React from 'react';
import { Switch } from 'react-router-dom';

// Pages
import PrivateRoute from 'app/PrivateRoute';
import PublicRoute from 'app/PublicRoute';
import NotFoundPage from 'pages/404';
import LoginPage from 'pages/Login';

// Lazy load
const HomePage = React.lazy(() => import('pages/Home'));
const AboutPage = React.lazy(() => import('pages/About'));

const AppRouter = () => (
  <Switch>
    <PrivateRoute exact path="/" children={<HomePage />} />
    <PrivateRoute path="/about" children={<AboutPage />} />
    <PublicRoute path="/login" children={<LoginPage />} />
    <PublicRoute path="*" children={<NotFoundPage />} />
  </Switch>
);

export default AppRouter;
