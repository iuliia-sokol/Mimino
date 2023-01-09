import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SwiperStyled = styled(Swiper)`
  width: 100%;
`;

export const SlideStyled = styled(SwiperSlide)`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  background-position: center;
  background-size: cover;

  & > img {
    width: 100%;
    height: auto;
  }
`;

export const SwiperBtnsWrapper = styled.div`
  display: flex;
  justify-content: ${p => (p.position === 'left' ? 'flex-start' : 'flex-end')};
  gap: 32px;
`;
