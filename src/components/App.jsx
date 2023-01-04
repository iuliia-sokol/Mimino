import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from '../pages/SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout></SharedLayout>}></Route>
    </Routes>
  );
};
