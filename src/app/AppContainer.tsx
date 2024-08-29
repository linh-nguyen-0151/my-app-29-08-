import React, { useState } from 'react';

type AppContextType = {
  isLogin: boolean;
  setIsLogin: any;
  accessToken?: unknown;
  setAccessToken?: () => void;
};

export const AppContext = React.createContext<AppContextType>({
  isLogin: false,
  setIsLogin: () => null,
  accessToken: null,
  setAccessToken: () => null,
});

const AppContainer = ({ children }: any) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContainer;
