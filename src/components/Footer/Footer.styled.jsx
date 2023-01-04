import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FooterLinksWrapper = styled.div`
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

export const FooterLinkListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const FooterLink = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.secondaryAccent};
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.xxs};
  font-weight: ${p => p.theme.fontWeights[2]};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  transform: scale(1);

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.mainAccent};
  }
`;
