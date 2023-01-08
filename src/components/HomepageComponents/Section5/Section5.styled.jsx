import styled from 'styled-components';

export const Section5Wrapper = styled.section`
  width: 100%;
  padding-top: 36px;
  padding-bottom: 32px;
  background-color: ${p => p.theme.colors.sectionBg1};

  @media screen and (min-width: 1024px) {
    padding-top: 56px;
    padding-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 74px;
  }
`;

export const DataWrapper = styled.div`
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  align-items: flex-start;
  overflow-x: hidden;

  @media screen and (min-width: 1024px) {
    align-self: flex-start;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BannerWrapper = styled.div`
  align-self: flex-end;

  @media screen and (min-width: 1024px) {
    align-self: flex-start;
  }
`;

export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const LinksItem = styled.li`
  width: 100%;

  @media screen and (min-width: 1024px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 1024px) {
    justify-content: space-between;
    flex-direction: row;
    gap: 35px;
  }
`;

export const SubHeader = styled.h3`
  margin-bottom: 24px;
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.xxxs};
  font-weight: ${p => p.theme.fontWeights[3]};
  line-height: ${p => p.theme.lineHeights.content};
  color: ${p => p.theme.colors.content};

  @media screen and (min-width: 1024px) {
    margin-bottom: 52px;
  }
  @media screen and (min-width: 1024px) {
    margin-bottom: 40px;
    font-size: ${p => p.theme.fontSizes.xxs};
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
    margin-bottom: 8px;
    font-size: ${p => p.theme.fontSizes.xl};
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 16px;
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

export const MapWrapper = styled.div`
  /* margin-top: 32px;
  width: ${p => p.theme.sizes.sliderWidthMobile[0]};
  align-self: flex-start;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;

  @media screen and (min-width: 1024px) {
    width: ${p => p.theme.sizes.sliderWidthTablet[0]};
    margin-top: -180px;
  }

  @media screen and (min-width: 1280px) {
    width: ${p => p.theme.sizes.sliderWidthDesktop[0]};
  } */
`;
