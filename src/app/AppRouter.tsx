import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import NotFoundPage from 'pages/404';
import LoginPage from 'pages/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

// Lazy load components
const HomePage = React.lazy(() => import('pages/Home'));
const AboutPage = React.lazy(() => import('pages/About'));

const AppRouter = () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<PrivateRoute element={<HomePage />} />} />
      <Route path="/about" element={<PrivateRoute element={<AboutPage />} />} />
      <Route path="/login" element={<PublicRoute element={<LoginPage />} />} />
      <Route path="*" element={<PublicRoute element={<NotFoundPage />} />} />
    </Routes>
  </React.Suspense>
);

export default AppRouter;
