import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Splash from 'components/loading/Splash';

const AuthLayout = () => {
  return (
    <Suspense fallback={<Splash />}>
      <Outlet />
    </Suspense>
  );
};

export default AuthLayout;
