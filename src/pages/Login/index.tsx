import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

// hooks
import useSessionStorage from 'hooks/useSessionStorage';

// services
import AuthService from 'services/AuthService';

// models
import { LoginRequest } from 'models/SampleModel';
import { STORAGE_KEYS } from 'constants/common';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useSessionStorage(STORAGE_KEYS.ACCESS_TOKEN);

  if (accessToken) {
    navigate('/');
    return null;
  }

  const handleLogin = (event: any) => {
    event.preventDefault();

    const req = new LoginRequest();
    AuthService.login(req)
      .then((resp) => {})
      .finally(() => {
        setAccessToken('value');
        navigate('/');
      });
  };

  return (
    <form onSubmit={handleLogin} className="login-form">
      <h2 className={'fs-1 mb-3'}>Login page</h2>

      <div className="mb-3 w-100">
        <label className="form-label" htmlFor="username">
          Username
        </label>
        <input className="form-control" type="text" name="username" id="username" required />
      </div>
      <div className="mb-3 w-100">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input className="form-control" type="password" name="password" id="password" required />
      </div>

      <button className={'btn btn-primary w-100 mt-3'}>Login</button>
    </form>
  );
};

export default LoginPage;
