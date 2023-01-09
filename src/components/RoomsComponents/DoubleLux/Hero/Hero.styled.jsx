import styled from 'styled-components';

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
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 1024px) {
    /* margin-bottom: -2px; */
  }

  @media screen and (min-width: 1280px) {
    /* margin-bottom: -3px; */
  }
`;

export const DataBlock = styled.div`
  position: absolute;
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: flex-end;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const SliderWrapper = styled.div`
  z-index: -1;
  height: 100%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 80%;
  align-self: flex-start;
  padding: 0 15px;
  justify-content: flex-start;

  @media screen and (min-width: 1024px) {
    width: 45%;
    align-self: flex-end;
    padding-bottom: 32px;
    padding-left: 47px;
    padding-right: 47px;
  }
  @media screen and (min-width: 1280px) {
    padding-left: 85px;
    padding-right: 85px;
    padding-bottom: 50px;
  }
`;

export const RoomName = styled.h3`
  margin-bottom: 16px;
  font-family: ${p => p.theme.fonts.secondary};
  font-size: 28px;
  font-weight: ${p => p.theme.fontWeights[4]};
  line-height: ${p => p.theme.lineHeights.subheader};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  color: ${p => p.theme.colors.mainLight};

  @media screen and (min-width: 1024px) {
    margin-bottom: 24px;

    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const DescriptionText = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.xxxxxs};
  font-weight: ${p => p.theme.fontWeights[4]};
  line-height: ${p => p.theme.lineHeights.content};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.mainLight};

  @media screen and (min-width: 1024px) {
    width: 75%;
    font-size: ${p => p.theme.fontSizes.xxxs};
    margin-bottom: 24px;
  }
`;

export const HeroLocationBanner = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const HeroBtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-self: center;
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: 1024px) {
    align-self: flex-end;
    flex-direction: row;
    padding-left: 47px;
    padding-right: 47px;
  }
  @media screen and (min-width: 1280px) {
    padding-left: 85px;
    padding-right: 85px;
  }
`;

export const HeroSocialMediaLinksWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  bottom: 3%;
  left: 6%;
  padding: 0;
  margin: 0;

  @media screen and (min-width: 1024px) {
    bottom: 6%;
    flex-direction: row;
    left: 40%;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
