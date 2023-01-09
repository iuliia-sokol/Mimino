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

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 10%;
  }
`;

export const Table = styled.table`
  flex-basis: 100%;

  @media screen and (min-width: 1024px) {
    flex-basis: 45%;
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
    padding-top: 16px;
  }

  @media screen and (min-width: 1024px) {
    & > th {
      padding-bottom: 20px;
      padding-top: 20px;
    }
  }

  @media screen and (min-width: 1280px) {
    & > th {
      font-size: ${p => p.theme.fontSizes.xs};
    }
  }
`;

export const DishName = styled.td`
  width: 50%;
  text-align: start;
  color: ${p => p.theme.colors.mainDark};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[2]};
  line-height: ${p => p.theme.lineHeights.content};
  font-size: ${p => p.theme.fontSizes.xxxxs};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  padding-bottom: 8px;

  @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.xxxs};
    padding-bottom: 12px;
  }
`;

export const DishIngredients = styled.span`
  text-align: start;
  color: ${p => p.theme.colors.mainDark};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights.content};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  font-size: ${p => p.theme.fontSizes.xxxxxxs};
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

export const DishPrice = styled.td`
  text-align: end;
  width: 25%;
  color: ${p => p.theme.colors.mainDark};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[4]};
  line-height: ${p => p.theme.lineHeights.content};
  font-size: ${p => p.theme.fontSizes.xxxxs};
  letter-spacing: ${p => p.theme.letterSpacings.content};

  @media screen and (min-width: 1280px) {
    font-size: ${p => p.theme.fontSizes.xxxs};
  }
`;
