import Select from 'react-select';
import styled from 'styled-components';

export const CustomSelectStyled = styled(Select)`
  & .react-select__control {
    height: 64px;
    border: 2px solid ${p => p.theme.colors.mainAccent};
    background-color: transparent;
    border-radius: ${p => p.theme.radii.btnModal};
    font-size: ${p => p.theme.fontSizes.xxs};
    font-family: ${p => p.theme.fonts.main};
    font-weight: ${p => p.theme.fontWeights[4]};
    line-height: ${p => p.theme.lineHeights.subheader};
    letter-spacing: ${p => p.theme.letterSpacings.subheader};
    outline: none;
    padding: 17px 12px;
    margin-bottom: 8px;
    border-color: ${p => p.theme.colors.mainAccent};

    @media screen and (min-width: 1024px) {
      padding: 18px 12px;
      font-size: ${p => p.theme.fontSizes.xs};
    }

    &:hover {
      outline: none;
      border: 1px solid ${p => p.theme.colors.mainAccent};
    }

    &--is-focused {
      outline: none;
      border: 1px solid ${p => p.theme.colors.mainAccent};
    }
  }

  & .react-select__input {
    outline: none;
    color: ${p => p.theme.colors.mainDark};
  }

  & .react-select__placeholder {
    color: ${p => p.theme.colors.modalPlaceholder};
  }

  & .react-select__menu {
    outline: none;
    box-sizing: border-box;
    position: absolute;
    background-color: ${p => p.theme.colors.sectionBg1};
    z-index: 200;
    border: 2px solid ${p => p.theme.colors.mainAccent};
  }

  & .react-select__value-container {
    padding: 0;
  }

  & .react-select__single-value {
    font-size: ${p => p.theme.fontSizes.xxs};
    font-family: ${p => p.theme.fonts.main};
    font-weight: ${p => p.theme.fontWeights[4]};
    line-height: ${p => p.theme.lineHeights.subheader};
    letter-spacing: ${p => p.theme.letterSpacings.subheader};
  }

  & .react-select__indicator-separator {
    display: none;
  }

  & .react-select__dropdown-indicator {
    & svg {
      fill: ${p => p.theme.colors.secondaryAccent};
    }

    /* &:focus svg {
      fill: ${p => p.theme.colors.secondaryAccent};
      transform: rotate(180deg);
    } */
  }

  & .react-select__option {
    height: 64px;
    padding-left: 20px;
    display: flex;
    align-items: center;
    box-shadow: none;
    font-size: ${p => p.theme.fontSizes.xxs};
    font-family: ${p => p.theme.fonts.main};
    font-weight: ${p => p.theme.fontWeights[4]};
    line-height: ${p => p.theme.lineHeights.subheader};
    letter-spacing: ${p => p.theme.letterSpacings.subheader};
    background-color: ${p => p.theme.colors.sectionBg1};
    color: ${p => p.theme.colors.supheader};
    /* cursor: default; */

    &:disabled {
      cursor: not-allowed;
    }

    &--is-focused {
      cursor: default;
      background-color: ${p => p.theme.colors.mainAccent};
      color: ${p => p.theme.colors.mainDark};
    }
  }
`;
