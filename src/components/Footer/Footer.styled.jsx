import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoLink = styled(NavLink)`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* flex-grow: 1; */
  font-family: ${p => p.theme.fonts.logo};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights[4]};
  letter-spacing: ${p => p.theme.letterSpacings.logo};
  line-height: ${p => p.theme.lineHeights.logo};
  color: ${p => p.theme.colors.mainAccent};
  margin-left: 44px;
  margin-top: 58px;
  margin-bottom: 58px;

  @media screen and (min-width: 1024px) {
    font-size: ${p => p.theme.fontSizes.xl};
    margin-left: 30px;
    margin-top: 37px;
    margin-bottom: 37px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 40px;
    margin-bottom: 35px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-left: 85px; */
  /* flex-grow: 1; */

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
