import styled from 'styled-components';

export const FormTitle = styled.p`
  color: ${p => p.theme.colors.mainDark};
  font-family: ${p => p.theme.fonts.secondary};
  font-weight: ${p => p.theme.fontWeights[4]};
  line-height: ${p => p.theme.lineHeights.subheader};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  font-size: ${p => p.theme.fontSizes.xs};
  margin-bottom: 40px;

  @media screen and (min-width: 1024px) {
    font-size: ${p => p.theme.fontSizes.l};
  }
`;

export const BtnsWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
`;

export const ModalWrapper = styled.div`
  /* position: relative; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1280px) {
  }
`;

export const ModalForm = styled.form`
  width: 100%;
  color: #010101;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* gap: 16px; */

 

  @media screen and (min-width: 1280px) {
  } */
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Input = styled.input`
  max-height: 64px;
  border: 1px solid #c79002;
  background-color: transparent;
  border-radius: ${p => p.theme.radii.btnModal};
  font-size: ${p => p.theme.fontSizes.xxs};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[4]};
  line-height: ${p => p.theme.lineHeights.subheader};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  placeholder: ${p => p.theme.colors.modalPlaceholder};
  padding: 17px 12px;
  margin-bottom: 8px;

  @media screen and (min-width: 1024px) {
    padding: 18px 12px;
    font-size: ${p => p.theme.fontSizes.xs};
  }
`;

export const InputSelect = styled.select`
  max-height: 64px;
  border: 1px solid #c79002;
  background-color: transparent;
  border-radius: ${p => p.theme.radii.btnModal};
  font-size: ${p => p.theme.fontSizes.xxs};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[4]};
  line-height: ${p => p.theme.lineHeights.subheader};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  placeholder: ${p => p.theme.colors.modalPlaceholder};
  padding: 17px 12px;
  margin-bottom: 8px;

  @media screen and (min-width: 1024px) {
    padding: 18px 12px;
    font-size: ${p => p.theme.fontSizes.xs};
  }
`;

export const Hint = styled.p`
  color: ${p => p.theme.colors.secondaryAccent};
  font-size: ${p => p.theme.fontSizes.xxxxs};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[2]};
  line-height: ${p => p.theme.lineHeights.content};
  letter-spacing: ${p => p.theme.letterSpacings.content};

  @media screen and (min-width: 1024px) {
    font-size: ${p => p.theme.fontSizes.xxxs};
  }
`;

export const InputBlocksWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 16px;
  }
`;
