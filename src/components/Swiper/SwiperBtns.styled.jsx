import styled from 'styled-components';

export const SwiperBtn = styled.button`
  background-color: transparent;
  border: none;

  &:hover,
  &:focus {
    & svg {
      fill: ${p => p.theme.colors.mainAccent};
      stroke: ${p => p.theme.colors.mainAccent};
    }
  }
`;
