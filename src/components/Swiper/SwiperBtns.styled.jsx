import styled from 'styled-components';

export const SwiperBtn = styled.button`
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    & svg {
      fill: ${p => p.theme.colors.mainAccent};
      stroke: ${p => p.theme.colors.mainAccent};
    }
  }
`;
