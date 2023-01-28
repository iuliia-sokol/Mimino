import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  & .react-datepicker__day--selected {
    background-color: ${p => p.theme.colors.mainAccent};
  }

  & .react-datepicker__day--keyboard-selected {
    background-color: ${p => p.theme.colors.mainAccent};
  }

  & .react-datepicker__header {
    font-size: ${p => p.theme.fontSizes.xxxxs};
    font-family: ${p => p.theme.fonts.main};
    font-weight: ${p => p.theme.fontWeights[4]};
    line-height: ${p => p.theme.lineHeights.subheader};
    letter-spacing: ${p => p.theme.letterSpacings.subheader};
    background-color: ${p => p.theme.colors.mainAccent};
    color: ${p => p.theme.colors.mainDark};
    border: none;
  }

  & .react-datepicker {
    position: absolute;
    border: 2px solid ${p => p.theme.colors.mainAccent};
    color: ${p => p.theme.colors.textContent};
    background-color: transparent;
    bottom: 0;
    left: 0;
    transform: translate(1%, -78px);

    @media screen and (min-width: 1024px) {
      transform: translate(-108%, 10%);
    }

    /* @media screen and (min-width: 1280px) {
      transform: translate(2%, 10%);
    } */
  }

  & .react-datepicker__day-name {
    color: ${p => p.theme.colors.textContent};
    font-size: ${p => p.theme.fontSizes.xxxs};
    font-family: ${p => p.theme.fonts.main};
    font-weight: ${p => p.theme.fontWeights[3]};
    line-height: ${p => p.theme.lineHeights.subheader};
    letter-spacing: ${p => p.theme.letterSpacings.subheader};
  }

  &
    .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::after,
  &
    .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before,
  & .react-datepicker__triangle {
    /* transform: translate3d(16px, 0px, 0px) !important;
    border-bottom-color: ${p => p.theme.colors.mainAccent};
     */
    display: none;
  }

  & .react-datepicker__navigation-icon::before {
    border-color: ${p => p.theme.colors.mainDark};
  }

  .react-datepicker__navigation:hover *::before {
    border-color: ${p => p.theme.colors.mainDark};
  }

  & .react-datepicker__month-container {
    color: ${p => p.theme.colors.mainDark};
    background-color: ${p => p.theme.colors.sectionBg1};
    border-radius: ${p => p.theme.radii.btnModal};
  }

  & .react-datepicker__day {
    border: 1px solid ${p => p.theme.colors.mainAccent};
    font-size: ${p => p.theme.fontSizes.xxs};
    font-family: ${p => p.theme.fonts.main};
    font-weight: ${p => p.theme.fontWeights[3]};
    color: ${p => p.theme.colors.mainDark};
    margin: 0.2rem;

    &--weekend {
      background-color: ${p => p.theme.colors.sectionBg2};
    }

    &--disabled {
      color: ${p => p.theme.colors.supheader};
    }

    @media screen and (min-width: 1024px) {
      padding: 0.2rem;
    }
  }

  & .react-datepicker__current-month {
    font-size: ${p => p.theme.fontSizes.xxs};
    font-family: ${p => p.theme.fonts.main};
    font-weight: ${p => p.theme.fontWeights[4]};
    line-height: ${p => p.theme.lineHeights.subheader};
    letter-spacing: ${p => p.theme.letterSpacings.subheader};
    text-transform: uppercase;
    color: ${p => p.theme.colors.mainDark};
  }

  & .react-datepicker__day--selected:hover,
  & .react-datepicker__day--selected:focus {
    background-color: ${p => p.theme.colors.mainAccent};
  }

  & .react-datepicker-wrapper {
    width: 100%;
    border-radius: ${p => p.theme.radii.btnModal};
  }

  & .date {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;

    padding: 17px 12px;
    font-size: ${p => p.theme.fontSizes.xxs};
    font-family: ${p => p.theme.fonts.main};
    font-weight: ${p => p.theme.fontWeights[4]};
    line-height: ${p => p.theme.lineHeights.subheader};
    letter-spacing: ${p => p.theme.letterSpacings.subheader};
    display: flex;
    align-items: center;
    text-transform: uppercase;

    @media screen and (min-width: 1024px) {
      padding: 18px 12px;
      font-size: ${p => p.theme.fontSizes.xs};
    }
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  max-height: 64px;
  border: 1px solid #c79002;
  background-color: transparent;
  border-radius: ${p => p.theme.radii.btnModal};
  font-size: ${p => p.theme.fontSizes.xxs};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[4]};
  line-height: ${p => p.theme.lineHeights.subheader};
  letter-spacing: ${p => p.theme.letterSpacings.subheader};
  margin-bottom: 8px;

  &::placeholder {
    color: ${p => p.theme.colors.modalPlaceholder};
  }
`;
