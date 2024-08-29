import React from 'react';
import { Link } from 'react-router-dom';

// Service
import AuthService from 'services/AuthService';
import RouteConfig from 'configs/RouteConfig';

const Header = () => {
  const logout = () => AuthService.logout();

  return (
    <nav className="navbar navbar-expand">
      <div className="navbar-nav">
        <Link to={RouteConfig.HOME_PAGE} className="nav-item nav-link me-3">
          Home
        </Link>
        <Link to={RouteConfig.ABOUT_PAGE} className="nav-item nav-link me-3">
          About
        </Link>
        <Link to={RouteConfig.LOGIN} onClick={logout} className="nav-item nav-link cursor-pointer">
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Header;
