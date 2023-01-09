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
    stroke: ${p => (p.background === "light" ? p.theme.colors.mainLight : 'none')};
  }

  &:hover,
  &:focus {
    & svg {
      stroke: ${p => p.theme.colors.mainAccent};
    }
  }
`;
