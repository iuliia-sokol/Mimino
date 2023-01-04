import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

export const HeaderLinksWrapper = styled.div`
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

export const HeaderLinksItem = styled.li`
  padding: 8px;
  &:not(:first-child) {
    margin-left: 20px;
  }

  @media screen and (min-width: 1024px) {
    &:not(:first-child) {
      margin-left: 72px;
    }
  }

  @media screen and (min-width: 1280px) {
    &:last-child {
      margin-left: 136px;
    }
  }
`;

export const HeaderLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${p => p.theme.colors.secondaryAccent};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.mainAccent};
  }

  & svg {
    width: 24px;
    height: 24px;
  }
`;

export const HeaderLinkText = styled.span`
  margin-right: 8px;
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.xxxs};
  font-weight: ${p => p.theme.fontWeights[2]};
  letter-spacing: ${p => p.theme.letterSpacings.content};

  @media screen and (min-width: 1024px) {
    margin-right: 32px;
    font-size: ${p => p.theme.fontSizes.xxs};
  }
`;

export const HeaderLinkPhoneWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Phone = styled.span`
  display: none;
  @media screen and (min-width: 1024px) {
    display: inline-block;
    margin-left: 8px;
    font-family: ${p => p.theme.fonts.main};
    font-size: ${p => p.theme.fontSizes.xxxxs};
    font-weight: ${p => p.theme.fontWeights[1]};
    letter-spacing: ${p => p.theme.letterSpacings.content};
    color: ${p => p.theme.colors.mainLight};
  }
`;
