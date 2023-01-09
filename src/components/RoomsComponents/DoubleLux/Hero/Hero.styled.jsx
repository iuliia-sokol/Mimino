import styled from 'styled-components';

import HeroBgImage1x from '../../../../images/hotel/hero-bg-1x.jpg';
import HeroBgImage2x from '../../../../images/hotel/hero-bg-2x.jpg';

export const HeaderLayout = styled.div`
  position: absolute;
  top: 0;
  z-index: 100;
  height: 118px;
  width: 100%;
  background-image: linear-gradient(
    180deg,
    #000000 0%,
    rgba(0, 0, 0, 0.55) 54.17%,
    rgba(0, 0, 0, 0) 100%
  );
`;

export const HeroWrapper = styled.section`
  position: relative;
  width: 100%;

  /* padding-bottom: 102px; */
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.65),
      rgba(0, 0, 0, 0.65)
    ),
    url(${HeroBgImage1x});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;

  @media screen and (min-width: 1024px) {
    /* padding-top: 225px; */
    /* padding-bottom: 65px; */
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.65),
        rgba(0, 0, 0, 0.65)
      ),
      url(${HeroBgImage2x});
  }
`;

export const DataBlock = styled.div`
  position: absolute;
  top: 0;
  z-index: 10000;
  padding-top: 181px;

  @media screen and (min-width: 1024px) {
    padding-top: 225px;
    padding-bottom: 65px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 164px;
  }
`;

export const SliderWrapper = styled.div`
  z-index: -1;
`;

export const Title = styled.h1`
  margin-left: 0.3em;
  font-family: ${p => p.theme.fonts.logo};
  font-size: ${p => p.theme.fontSizes.xxl};
  font-weight: ${p => p.theme.fontWeights[4]};
  letter-spacing: ${p => p.theme.letterSpacings.logo};
  line-height: ${p => p.theme.lineHeights.logo};
  color: ${p => p.theme.colors.mainLight};

  @media screen and (min-width: 1024px) {
    font-size: ${p => p.theme.fontSizes.xxxl};
  }
`;

export const DescriptionText = styled.p`
  margin-bottom: 143px;
  margin-top: 24px;
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.xxxs};
  font-weight: ${p => p.theme.fontWeights[3]};
  line-height: ${p => p.theme.lineHeights.content};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.mainLight};

  @media screen and (min-width: 1024px) {
    font-size: ${p => p.theme.fontSizes.xxs};
    margin-bottom: 200px;

    margin-top: 16px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 64px;
    margin-top: 32px;
  }
`;

export const HeroContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  @media screen and (min-width: 1024px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const HeroLocationBanner = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

export const HeroBtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-self: center;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 40px;
  }
  @media screen and (min-width: 1280px) {
    gap: 60px;
  }
`;

export const HeroSocialMediaLinksWrapper = styled.ul`
  display: flex;
  position: absolute;
  bottom: -15%;
  left: 6%;
  padding: 0;
  margin: 0;

  @media screen and (min-width: 1024px) {
    bottom: -10%;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
