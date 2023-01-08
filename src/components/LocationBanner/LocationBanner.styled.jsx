import styled from 'styled-components';

export const LocationText = styled.p`
  display: inline-block;
  max-width: ${p => (p.background === 'light' ? '183px' : 'fit-content')};
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p =>
    p.background === 'light'
      ? p.theme.fontSizes.xxxs
      : p.theme.fontSizes.xxxxxs};
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights.content};
  letter-spacing: ${p => p.theme.letterSpacings.textDataHero};
  color: ${p =>
    p.background === 'light'
      ? p.theme.colors.headersMain
      : p.theme.colors.mainLight};

  @media screen and (min-width: 1024px) {
    max-width: fit-content;
    font-size: ${p => p.theme.fontSizes.xxxs};
  }
`;

export const LocationIconWrapper = styled.span`
  & > svg {
    color: ${p => p.theme.colors.mainAccent};
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`;

export const LocationWrapper = styled.div`
  /* position: absolute;
  right: 15px;
  top: 74px; */
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(243, 198, 83, 0.7);
  border-radius: ${p => p.theme.radii.btnModal};
  background-color: ${p =>
    p.background === 'light' ? p.theme.colors.mainLight : 'transparent'};
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: ${p => (p.background === 'light' ? '33px' : '8px')};

  @media screen and (min-width: 1024px) {
    /* position: static; */
    padding-left: 10px;
    padding-right: 10px;
    /* right: 0;
    top: 0;*/
    /* bottom: 0px;
    left: 47px; */
  }

  @media screen and (min-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
    /* left: 85px; */
  }
`;
