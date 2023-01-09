import styled from 'styled-components';

export const Section2Wrapper = styled.section`
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
  background-color: ${p => p.theme.colors.sectionBg1};

  @media screen and (min-width: 1024px) {
    padding-top: 58px;
    padding-bottom: 40px;
    background-color: ${p => p.theme.colors.sectionBg2};
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 60px;
  }
`;

export const CaptionStyled = styled.caption`
  color: ${p => p.theme.colors.mainDark};
  font-family: ${p => p.theme.fonts.secondary};
  font-weight: ${p => p.theme.fontWeights[4]};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.content};
  text-align: start;
  margin-bottom: 32px;

  @media screen and (min-width: 1024px) {
    margin-bottom: 40px;
  }
`;

export const TableSubtitle = styled.tr`
  & > th {
    text-align: start;
    color: ${p => p.theme.colors.mainDark};
    font-family: ${p => p.theme.fonts.secondary};
    font-weight: ${p => p.theme.fontWeights[4]};
    line-height: ${p => p.theme.lineHeights.content};
    font-size: ${p => p.theme.fontSizes.xxs};
    padding-bottom: 16px;
  }

  @media screen and (min-width: 1024px) {
    & > th {
      padding-bottom: 20px;
    }
  }

  @media screen and (min-width: 1280px) {
    & > th {
      font-size: ${p => p.theme.fontSizes.xs};
    }
  }
`;
