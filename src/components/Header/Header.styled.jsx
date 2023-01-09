import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 10000;

  /* ${p => (p.background === 'light' ? p.theme.colors.mainLight : 'none')};
  background-image: ${p =>
    p.block === 'rooms'
      ? 'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.55) 54.17%, rgba(0, 0, 0, 0) 100%)'
      : 'none'}; */
`;

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
