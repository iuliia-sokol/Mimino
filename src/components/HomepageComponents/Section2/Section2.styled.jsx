import styled from 'styled-components';

import Sec2BgImage1x from '../../../images/homepage/desktop/Main-bg-desk-2-1x.jpg';
import Sec2BgImage2x from '../../../images/homepage/desktop/Main-bg-desk-2-2x.jpg';

export const Section2Wrapper = styled.section`
  width: 100%;
  padding-top: 24px;
  padding-bottom: 40px;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.65),
      rgba(0, 0, 0, 0.65)
    ),
    url(${Sec2BgImage1x});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 1024px) {
    padding-top: 48px;
  }

  @media screen and (min-width: 1280px) {
    /* padding-bottom: 50px; */
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.65),
        rgba(0, 0, 0, 0.65)
      ),
      url(${Sec2BgImage2x});
  }
`;

export const DataWrapper = styled.div`
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  align-items: flex-start;
  overflow-x: hidden;

  @media screen and (min-width: 1024px) {
  }
`;

export const Header = styled.h2`
  margin-bottom: 12px;
  font-family: ${p => p.theme.fonts.logo};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights[4]};
  line-height: ${p => p.theme.lineHeights.logo};
  letter-spacing: ${p => p.theme.letterSpacings.logo};
  color: ${p => p.theme.colors.mainLight};

  @media screen and (min-width: 1024px) {
    margin-bottom: 16px;
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const SubHeader = styled.h3`
  margin-bottom: 20px;
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.xxs};
  font-weight: ${p => p.theme.fontWeights[4]};
  line-height: ${p => p.theme.lineHeights.content};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.mainLight};

  @media screen and (min-width: 1024px) {
    margin-bottom: 8px;
    font-size: ${p => p.theme.fontSizes.xs};
  }
`;

export const Data = styled.p`
  display: block;
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.xxxxxs};
  font-weight: ${p => p.theme.fontWeights[3]};
  line-height: ${p => p.theme.lineHeights.content};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.textContentSection};
  max-width: 259px;

  @media screen and (min-width: 1024px) {
    font-size: ${p => p.theme.fontSizes.xxxs};
    max-width: 610px;
  }
`;

export const SliderWrapper = styled.div`
  margin-top: 48px;
  /* width: ${p => p.theme.sizes.sliderWidthMobile[1]}; */
  /* align-self: flex-end; */
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  margin-left: 25px;

  @media screen and (min-width: 1024px) {
    margin-top: 40px;
    margin-left: 0;
    width: ${p => p.theme.sizes.sliderWidthTablet[1]};
  }

  @media screen and (min-width: 1280px) {
    width: ${p => p.theme.sizes.sliderWidthDesktop[1]};
  }
`;

export const SliderButtonWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  gap: 32px;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 28px;
  }
  @media screen and (min-width: 1280px) {
    gap: 31px;
  }
`;

export const BtnsWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1024px) {
    align-self: flex-end;
    margin-bottom: 70px;
  }
  @media screen and (min-width: 1280px) {
  }
`;
