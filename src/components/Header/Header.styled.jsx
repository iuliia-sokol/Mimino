import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 85px;
  flex-grow: 1;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    margin-left: 163px;
    flex-grow: 2;
    justify-content: space-between;
  }
`;
