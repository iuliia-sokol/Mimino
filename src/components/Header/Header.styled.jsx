import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${p => p.theme.fonts.logo};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights[4]};
  letter-spacing: ${p => p.theme.letterSpacings.logo};
  line-height: ${p => p.theme.lineHeights.logo};
  color: ${p => p.theme.colors.mainLight};

  @media screen and (min-width: 1024px) {
    font-size: ${p => p.theme.fontSizes.l};
  }
`;

export const HeaderLinksItem = styled.li`
  &:not(:first-child) {
    margin-left: 20px;
  }

  &:last-child {
    margin-left: 0;
  }

  @media screen and (min-width: 1024px) {
    &:not(:first-child) {
      margin-left: 72px;
    }

    &:last-child {
      margin-left: 0;
    }
  }

  @media screen and (min-width: 1280px) {
    &:last-child {
      margin-left: 136px;
    }
  }
`;

export const HeaderLocationBanner = styled.div`
  display: flex;
  position: absolute;
  top: 100%;
  right: 6%;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const HeaderSocialMediaLinksWrapper = styled.ul`
  display: none;
  padding: 0;
  margin: 0;

  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;
