import styled from 'styled-components';

import HeroBgImage1x from '../../../images/homepage/desktop/Main-bg-desk-1x.jpg';

export const HeroWrapper = styled.section`
  width: 100%;
  padding-top: 181px;
  padding-bottom: 102px;
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
    padding-top: 225px;
    padding-bottom: 65px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 164px;
  }
`;

export const Title = styled.h1`
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

export const Slogan = styled.p`
  text-transform: uppercase;
  margin-bottom: 113px;
  font-family: ${p => p.theme.fonts.secondary};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights[4]};
  line-height: ${p => p.theme.lineHeights.subheader};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${p => p.theme.colors.mainLight};

  @media screen and (min-width: 1024px) {
    font-size: ${p => p.theme.fontSizes.m};
    margin-bottom: 145px;
  }
`;

export const DescriptionText = styled.p`
  margin-bottom: 40px;
  margin-top: 24px;
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.xxxs};
  font-weight: ${p => p.theme.fontWeights[3]};
  line-height: ${p => p.theme.lineHeights.content};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.mainLight};

  @media screen and (min-width: 1024px) {
    font-size: ${p => p.theme.fontSizes.xxs};
    margin-bottom: 56px;
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
    /* flex-grow: 1; */
  }
  @media screen and (min-width: 1280px) {
    gap: 60px;
    /* flex-grow: 1; */
  }
`;
