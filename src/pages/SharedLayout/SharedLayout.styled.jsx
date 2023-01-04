import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FooterLinkListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const FooterSocialMediaLinkListItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
  @media screen and (min-width: 1024px) {
    &:not(:last-child) {
      margin-bottom: 12px;
      margin-right: 0;
    }
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

export const FooterSocialMediaLink = styled.a`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${p => p.theme.colors.secondaryAccent};
  transform: scale(1);

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.mainAccent};
  }

  & > svg {
    width: 24px;
    height: 24px;
  }

  & > span {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    width: ${p => p.theme.sizes.footerLinkWidth};
    padding-top: ${p => p.theme.space[0]}px;
    padding-bottom: ${p => p.theme.space[0]}px;
    padding-left: ${p => p.theme.space[9]}px;
    padding-right: ${p => p.theme.space[9]}px;
    border-radius: ${p => p.theme.radii.btnModal};
    border: ${p => p.theme.borders.footerLink};
    font-family: ${p => p.theme.fonts.main};
    font-size: ${p => p.theme.fontSizes.xxxs};
    font-weight: ${p => p.theme.fontWeights[1]};
    letter-spacing: ${p => p.theme.letterSpacings.content};
    line-height: ${p => p.theme.lineHeights.content};
    text-decoration: none;

    & > span {
      display: inline-block;
    }
  }
`;
