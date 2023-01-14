import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from '../pages/SharedLayout/SharedLayout';

const Homepage = lazy(() => import('pages/Homepage/Homepage'));
const Hotel = lazy(() => import('pages/Hotel/Hotel'));
const Restaurant = lazy(() => import('pages/Restaurant/Restaurant'));
const RoomDoubleLux = lazy(() => import('pages/Rooms/RoomDoubleLux'));
const RoomDouble = lazy(() => import('pages/Rooms/RoomDouble'));
const RoomTriple = lazy(() => import('pages/Rooms/RoomTriple'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Homepage />} />
        <Route path="restaurant" element={<Restaurant />} />
        <Route path="hotel" element={<Hotel />} />
        <Route path="hotel/double-lux" element={<RoomDoubleLux />} />
        <Route path="hotel/triple" element={<RoomTriple />} />
        <Route path="hotel/double" element={<RoomDouble />} />
      </Route>
    </Routes>
  );
};
