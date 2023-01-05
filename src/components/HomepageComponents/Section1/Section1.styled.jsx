import styled from 'styled-components';

export const Section1Wrapper = styled.section`
  width: 100%;
  padding-top: 16px;
  padding-bottom: 20px;
  background-color: ${p => p.theme.colors.sectionBg1};

  @media screen and (min-width: 1024px) {
    padding-top: 120px;
    padding-bottom: 32px;
    /* padding-top: 225px;
    padding-bottom: 65px; */
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 50px;
  }

  /* @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    
  } */
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 258px;

  @media screen and (min-width: 1024px) {
    max-width: fit-content;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  & > img {
    width: 244px;
    height: 322px;
    margin-top: 24px;
    box-shadow: 2px 2px 60px 2px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
  }

  @media screen and (min-width: 1024px) {
    & > img {
      width: 400px;
      height: 524px;
      margin-top: 0;
      box-shadow: 5px 5px 70px 17px rgba(0, 0, 0, 0.25);
      transform: translateY(-153px);
    }
  }

  @media screen and (min-width: 1280px) {
    & > img {
      width: 460px;
      height: 574px;
    }
  }
`;

export const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 35px;
  }
`;

export const SubHeader = styled.h3`
  margin-bottom: 12px;
  font-family: ${p => p.theme.fonts.secondary};
  font-size: ${p => p.theme.fontSizes.xxs};
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights.supheader};
  color: ${p => p.theme.colors.supheader};

  @media screen and (min-width: 1024px) {
    margin-bottom: 4px;
    font-size: ${p => p.theme.fontSizes.s};
  }
`;

export const Header = styled.h2`
  margin-bottom: 12px;
  font-family: ${p => p.theme.fonts.logo};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights[4]};
  line-height: ${p => p.theme.lineHeights.logo};
  letter-spacing: ${p => p.theme.letterSpacings.logo};
  color: ${p => p.theme.colors.headersMain};

  @media screen and (min-width: 1024px) {
    margin-bottom: 24px;
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const Data = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.xxxxxs};
  font-weight: ${p => p.theme.fontWeights[3]};
  line-height: ${p => p.theme.lineHeights.content};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.textContentSecondary};

  @media screen and (min-width: 1024px) {
    font-size: ${p => p.theme.fontSizes.xxxs};
  }
`;
