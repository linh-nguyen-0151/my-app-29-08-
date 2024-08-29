import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

// App
import AppContainer from 'app/AppContainer';
import AppLayout from 'app/AppLayout';

const App = () => {
  return (
    <>
      <AppContainer>
        <RecoilRoot>
          <Suspense fallback={<>loading ...</>}>
            <BrowserRouter>
              <AppLayout />
            </BrowserRouter>
          </Suspense>
        </RecoilRoot>
      </AppContainer>
    </>
  );
};

export default App;
