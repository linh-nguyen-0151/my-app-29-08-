import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// App router
import AppRouter from 'app/AppRouter';

// Components
import Header from 'components/Header';
import Footer from 'components/Footer';

// Services
import AuthService from 'services/AuthService';

const AppLayout = () => {
  const location = useLocation();
  const [accessToken, setAccessToken] = useState('');

  // listen route change
  useEffect(() => {
    setAccessToken(AuthService.getAccessToken());
  }, [location]);

  return (
    <div className={'d-flex flex-column justify-content-between vh-100'}>
      <>
        {accessToken && <Header />}

        <div className="container-fluid flex-grow-1 bg-linear-default">
          <AppRouter />
        </div>

        {accessToken && <Footer />}
      </>
    </div>
  );
};

export default AppLayout;
