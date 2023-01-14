import styled from 'styled-components';

export const BtnElement = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${p => p.theme.radii.btnModal};
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.xxs};
  font-weight: ${p => p.theme.fontWeights[2]};
  text-transform: uppercase;
  line-height: ${p => p.theme.lineHeights.content};
  border: ${p => p.theme.borders.btnLarge};
  background-color: ${p => {
    return p.disabled ? p.theme.colors.btnDisabledBg : p.theme.colors.mainDark;
  }};
  color: ${p => p.theme.colors.mainLight};
  transform: scale(1);
  cursor: pointer;

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    transform: scale(1.1);
    color: ${p => p.theme.colors.mainDark};
    background-color: ${p => p.theme.colors.mainAccent};
    border: ${p => p.theme.borders.btnLargeActive};
  }

  @media screen and (min-width: 414px) {
    padding-top: ${p => p.theme.space[3]}px;
    padding-bottom: ${p => p.theme.space[3]}px;
    padding-left: ${p => p.theme.space[5]}px;
    padding-right: ${p => p.theme.space[5]}px;
    font-size: ${p => p.theme.fontSizes.xs};
  }
`;
