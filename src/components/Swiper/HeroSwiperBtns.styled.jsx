import styled from 'styled-components';

export const SwiperBtn = styled.button`
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    fill: ${p => p.theme.colors.mainAccent};
  }

  /* &:hover,
  &:focus {
    & svg {
      stroke: ${p => p.theme.colors.mainAccent};
    }
  } */
`;
