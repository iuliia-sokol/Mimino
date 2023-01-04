import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import { ButtonStandart } from './Buttons/ButtonStandart/ButtonStandart';

const Text = styled.p`
  font-family: ${p => p.theme.fonts.logo};
`;

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Text>
            StartPage
            <ButtonStandart text="test"></ButtonStandart>
          </Text>
        }
      ></Route>
    </Routes>
  );
};
