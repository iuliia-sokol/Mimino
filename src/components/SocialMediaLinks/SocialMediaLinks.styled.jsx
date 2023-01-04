import styled from 'styled-components';

export const SocialMediaLinkListItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
  @media screen and (min-width: 1024px) {
    &:not(:last-child) {
      margin-bottom: ${p => (p.location === 'footer' ? '12px' : '0')};
      margin-right: ${p => (p.location === 'header' ? null : '0')};
    }
  }
`;

export const SocialMediaLink = styled.a`
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
    width: ${p =>
      p.location === 'footer' ? p.theme.sizes.footerLinkWidth : 'fit-content'};
    padding-top: ${p =>
      p.location === 'footer' ? p.theme.space[0] + 'px' : '0'};
    padding-bottom: ${p =>
      p.location === 'footer' ? p.theme.space[0] + 'px' : '0'};
    padding-left: ${p =>
      p.location === 'footer' ? p.theme.space[9] + 'px' : '0'};
    padding-right: ${p =>
      p.location === 'footer' ? p.theme.space[9] + 'px' : '0'};
    border-radius: ${p => p.theme.radii.btnModal};
    border: ${p =>
      p.location === 'footer' ? p.theme.borders.footerLink : 'none'};
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
