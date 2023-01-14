import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const GoBackLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: ${p => p.theme.colors.secondaryAccent};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[2]};
  line-height: ${p => p.theme.lineHeights.content};
  font-size: ${p => p.theme.fontSizes.xxxs};
  letter-spacing: ${p => p.theme.letterSpacings.content};

  & svg {
    fill: ${p => p.theme.colors.secondaryAccent};
    width: 24px;
    height: 24px;
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.mainAccent};
  }

  &:hover svg,
  &:focus svg {
    fill: ${p => p.theme.colors.mainAccent};
  }

  @media screen and (min-width: 1024px) {
    gap: 16px;
    font-size: ${p => p.theme.fontSizes.xxs};
  }
`;
