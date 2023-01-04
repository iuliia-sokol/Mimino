import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div>StartPage</div>}></Route>
    </Routes>
  );
};
