import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import {} from './SharedLayout.styled';

import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
// import { Loader } from '../../components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<h1>Loading</h1>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};