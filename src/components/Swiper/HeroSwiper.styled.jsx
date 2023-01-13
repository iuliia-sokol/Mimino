import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SwiperStyled = styled(Swiper)`
  width: 100%;
  height: 100%;
  transform: translateY(5px);
`;

export const SlideStyled = styled(SwiperSlide)`
  width: 100vw;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: stretch;

  & > img {
    flex-grow: 1;
    width: 100%;
    height: 100%;
  }
`;

export const SwiperBtnsWrapper = styled.div`
  display: flex;
  justify-content: ${p => (p.position === 'left' ? 'flex-start' : 'flex-end')};
  gap: 32px;
`;
