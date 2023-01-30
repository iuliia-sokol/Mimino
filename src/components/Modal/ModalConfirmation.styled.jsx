import styled from 'styled-components';

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const Hint = styled.p`
  text-align: center;
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

export const ContentWrapper = styled.div`
  max-width: 70vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1024px) {
    max-width: 50vw;
  }
`;

export const ConfirmationText = styled.p`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.xxs};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[2]};
  line-height: ${p => p.theme.lineHeights.subheader};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};

  & > span {
    font-weight: bold;
  }
`;
