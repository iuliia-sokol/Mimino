import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BtnElement = styled.button`
  width: ${p => p.theme.sizes.btnStandartWidth};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${p => p.theme.radii.btnStandart};
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.xxxs};
  font-weight: ${p => p.theme.fontWeights[4]};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  line-height: ${p => p.theme.lineHeights.content};
  border: ${p => p.theme.borders.btnStandart};
  background-color: ${p => {
    return p.disabled ? p.theme.colors.btnDisabledBg : p.theme.colors.mainDark;
  }};
  color: ${p => p.theme.colors.mainAccent};
  transform: scale(1);
  cursor: pointer;

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    transform: scale(1.1);
    color: ${p => p.theme.colors.mainAccent};
    background-color: ${p => p.theme.colors.mainLight};
    border: ${p => p.theme.borders.btnStandartActive};
  }
`;

export const BtnElementLink = styled.a`
  box-sizing: border-box;
  width: ${p => p.theme.sizes.btnStandartWidth};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${p => p.theme.radii.btnStandart};
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.xxxs};
  font-weight: ${p => p.theme.fontWeights[4]};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  line-height: ${p => p.theme.lineHeights.content};
  border: ${p => p.theme.borders.btnStandart};
  background-color: ${p => {
    return p.disabled ? p.theme.colors.btnDisabledBg : p.theme.colors.mainDark;
  }};
  color: ${p => p.theme.colors.mainAccent};
  transform: scale(1);
  cursor: pointer;

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    transform: scale(1.1);
    color: ${p => p.theme.colors.mainAccent};
    background-color: ${p => p.theme.colors.mainLight};
    border: ${p => p.theme.borders.btnStandartActive};
  }
`;

export const BtnElementNavLink = styled(NavLink)`
  box-sizing: border-box;
  width: ${p => p.theme.sizes.btnStandartWidth};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${p => p.theme.radii.btnStandart};
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.xxxs};
  font-weight: ${p => p.theme.fontWeights[4]};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  line-height: ${p => p.theme.lineHeights.content};
  border: ${p => p.theme.borders.btnStandart};
  background-color: ${p => {
    return p.disabled ? p.theme.colors.btnDisabledBg : p.theme.colors.mainDark;
  }};
  color: ${p => p.theme.colors.mainAccent};
  transform: scale(1);
  cursor: pointer;

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    transform: scale(1.1);
    color: ${p => p.theme.colors.mainAccent};
    background-color: ${p => p.theme.colors.mainLight};
    border: ${p => p.theme.borders.btnStandartActive};
  }
`;
