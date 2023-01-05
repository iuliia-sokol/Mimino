import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from '../pages/SharedLayout/SharedLayout';

const Homepage = lazy(() => import('pages/Homepage/Homepage'));
const Hotel = lazy(() => import('pages/Hotel/Hotel'));
const Restaurant = lazy(() => import('pages/Restaurant/Restaurant'));
const RoomDoubleLux = lazy(() => import('pages/Rooms/RoomDoubleLux'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Homepage />} />
        <Route path="hotel" element={<Hotel />}>
          <Route path="double-lux" element={<RoomDoubleLux />} />
          <Route path="triple" element={<h1>Room triple</h1>} />
          <Route path="double-lux" element={<h1>Room double</h1>} />
        </Route>
        <Route path="restaurant" element={<Restaurant />} />
      </Route>
    </Routes>
  );
};
