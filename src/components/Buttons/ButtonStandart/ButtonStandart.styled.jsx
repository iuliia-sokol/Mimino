import styled from 'styled-components';

export const BtnElement = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${p => p.theme.radii.btnStandart};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.xxs};
  font-weight: ${p => p.theme.fontWeights[4]};
  box-shadow: 0px 12px 8px 4px #cab1b14d;
  border: ${p => p.theme.borders.btnStandart};
  background-color: ${p => p.theme.colors.mainDark};
  color: ${p => p.theme.colors.mainLight};
  transform: scale(1);

  &:hover,
  &:focus {
    transform: scale(1.1);
    color: ${p => p.theme.colors.mainAccent};
    background-color: ${p => p.theme.colors.mainLight};
    border: ${p => p.theme.borders.btnStandartActive};
  }

  /* & > svg {
    margin-right: 8px;
  } */
`;
