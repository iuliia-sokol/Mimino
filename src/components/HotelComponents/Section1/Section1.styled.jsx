import styled from 'styled-components';

export const Section1Wrapper = styled.section`
  width: 100%;
  padding-top: 16px;
  padding-bottom: 20px;
  background-color: ${p => p.theme.colors.sectionBg1};

  @media screen and (min-width: 1024px) {
    padding-top: 120px;
    padding-bottom: 32px;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 50px;
  }
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-x: hidden;

  @media screen and (min-width: 1024px) {
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
      transform: translate(-65px, -153px);
    }
  }

  @media screen and (min-width: 1280px) {
    & > img {
      width: 460px;
      height: 574px;
      transform: translate(-95px, -153px);
    }
  }
`;

export const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    justify-content: space-between;
    flex-direction: row;
    gap: 35px;
  }
`;

export const SubHeader = styled.h4`
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
  margin-bottom: 32px;
  font-family: ${p => p.theme.fonts.logo};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights[4]};
  line-height: ${p => p.theme.lineHeights.logo};
  letter-spacing: ${p => p.theme.letterSpacings.logo};
  color: ${p => p.theme.colors.headersMain};

  @media screen and (min-width: 1024px) {
    margin-bottom: 62px;
    font-size: ${p => p.theme.fontSizes.xl};
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 72px;
  }
`;

export const RoomName = styled.h3`
  margin-bottom: 12px;
  font-family: ${p => p.theme.fonts.secondary};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights[4]};
  line-height: ${p => p.theme.lineHeights.subheader};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${p => p.theme.colors.mainDark};

  @media screen and (min-width: 1024px) {
    margin-bottom: 16px;
    font-size: ${p => p.theme.fontSizes.s};
  }
  @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const Data = styled.p`
  display: block;
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.xxxxxs};
  font-weight: ${p => p.theme.fontWeights[3]};
  line-height: ${p => p.theme.lineHeights.content};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.textContentSecondary};
  max-width: 258px;

  @media screen and (min-width: 1024px) {
    font-size: ${p => p.theme.fontSizes.xxxs};
    max-width: 439px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 518px;
  }
`;

export const SliderWrapper = styled.div`
  width: ${p => p.theme.sizes.sliderWidthMobile[0]};
  align-self: flex-start;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;

  @media screen and (min-width: 1024px) {
    width: ${p => p.theme.sizes.sliderWidthTablet[0]};
  }

  @media screen and (min-width: 1280px) {
    width: ${p => p.theme.sizes.sliderWidthDesktop[0]};
  }
`;

export const BtnsWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  align-self: center;
`;

export const SliderBtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 32px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: -100px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: -120px;
  }
`;
