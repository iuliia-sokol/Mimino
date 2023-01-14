import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const ModalWindow = styled.div`
  position: relative;
  height: fit-content;
  width: fit-content;
  background-color: ${p => p.theme.colors.sectionBg1};
  padding: 60px 16px;
  opacity: 1;

  @media screen and (min-width: 1024px) {
    padding: 60px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 19px;
  right: 19px;
  border: none;
  background-color: transparent;
  color: ${p => p.theme.colors.mainDark};
  padding: 0;

  & svg {
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: 1280px) {
    top: 16px;
    right: 16px;
    & svg {
      width: 24px;
      height: 24px;
    }
  }
`;
