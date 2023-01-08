import styled from 'styled-components';

export const Link = styled.a`
  display: flex;
  justify-content: ${p =>
    p.linkLocation === 'header' ? 'center' : 'space-between'};
  align-items: center;
  color: ${p => p.theme.colors.secondaryAccent};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.mainAccent};
  }

  & svg {
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: ${p => (p.linkLocation === 'header' ? 'row' : 'column')};
    align-items: ${p =>
      p.linkLocation === 'header' ? 'center' : 'flex-start'};
  }
`;

export const LinkText = styled.span`
  margin-right: 8px;
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p =>
    p.linkLocation === 'header'
      ? p.theme.fontSizes.xxxs
      : p.theme.fontSizes.xxs};
  font-weight: ${p => p.theme.fontWeights[2]};
  letter-spacing: ${p => p.theme.letterSpacings.content};

  @media screen and (min-width: 1024px) {
    margin-right: 32px;
    margin-bottom: ${p => (p.linkLocation === 'header' ? '0' : '8px')};

    font-size: ${p => p.theme.fontSizes.xxs};
  }
`;

export const LinkPhoneWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => (p.linkLocation !== 'header' ? '12px 8px' : '0')};
  border: ${p =>
    p.linkLocation !== 'header' ? '0.5px solid #f3c653' : 'none'};
  border-radius: ${p =>
    p.linkLocation !== 'header' ? p.theme.radii.btnModal : 'none'};
  background-color: ${p =>
    p.linkLocation !== 'header' ? p.theme.colors.mainLight : 'transparent'};
`;

export const Phone = styled.span`
  display: ${p => (p.linkLocation === 'header' ? 'none' : 'inline-block')};
  margin-left: 8px;
  font-family: ${p => p.theme.fonts.main};
  font-size: ${p => p.theme.fontSizes.xxxxs};
  font-weight: ${p => p.theme.fontWeights[1]};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p =>
    p.textColor === 'light'
      ? p.theme.colors.mainLight
      : p.theme.colors.headersMain};

  @media screen and (min-width: 1024px) {
    display: inline-block;
  }
`;
