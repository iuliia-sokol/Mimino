import styled from 'styled-components';

export const BtnElement = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${p => p.theme.radii.btnStandart};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights[2]};
  text-transform: uppercase;
  line-height: ${p => p.theme.lineHeights.buttonLarge};
  border: ${p => p.theme.borders.btnLarge};
  background-color: ${p => p.theme.colors.mainDark};
  color: ${p => p.theme.colors.mainLight};
  transform: scale(1);

  &:hover,
  &:focus {
    transform: scale(1.1);
    color: ${p => p.theme.colors.mainAccent};
    background-color: ${p => p.theme.colors.mainLight};
    border: ${p => p.theme.borders.btnLargeActive};
  }

  &:disabled {
    transform: scale(1);
    background-color: ${p => p.theme.colors.btnDisabledBg};
  }

  /* & > svg {
    margin-right: 8px;
  } */
`;
