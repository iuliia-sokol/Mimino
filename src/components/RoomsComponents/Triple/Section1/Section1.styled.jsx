import styled from 'styled-components';

export const Section1Wrapper = styled.section`
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
  background-color: ${p => p.theme.colors.sectionBg1};

  @media screen and (min-width: 1024px) {
    padding-top: 48px;
    padding-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 48px;
    padding-bottom: 48px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media screen and (min-width: 1024px) {
    justify-content: flex-end;
    align-self: flex-end;
  }
`;

export const DishPortion = styled.td`
  text-align: end;
  width: 25%;
  color: ${p => p.theme.colors.mainDark};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.content};
  font-size: ${p => p.theme.fontSizes.xxxxs};
  letter-spacing: ${p => p.theme.letterSpacings.content};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

export const Header = styled.h2`
  color: ${p => p.theme.colors.mainDark};
  font-family: ${p => p.theme.fonts.secondary};
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights.supheader};
  font-size: ${p => p.theme.fontSizes.s};
  margin-bottom: 16px;
`;

export const HeaderText = styled.p`
  color: ${p => p.theme.colors.textContent};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[4]};
  line-height: ${p => p.theme.lineHeights.content};
  font-size: ${p => p.theme.fontSizes.xxxs};
  letter-spacing: ${p => p.theme.letterSpacings.content};
`;

export const Text = styled.p`
  display: block;
  width: 100%;
  color: ${p => p.theme.colors.textContent};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[4]};
  line-height: ${p => p.theme.lineHeights.content};
  font-size: ${p => p.theme.fontSizes.xxxs};
  letter-spacing: ${p => p.theme.letterSpacings.content};

  @media screen and (min-width: 1024px) {
    width: 45%;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const ContentBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
`;

export const SubHeader = styled.h3`
  color: ${p => p.theme.colors.mainDark};
  font-family: ${p => p.theme.fonts.secondary};
  font-weight: ${p => p.theme.fontWeights[4]};
  line-height: ${p => p.theme.lineHeights.supheader};
  font-size: ${p => p.theme.fontSizes.xs};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
  }
`;
