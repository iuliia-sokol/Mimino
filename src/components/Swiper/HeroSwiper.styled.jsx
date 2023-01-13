import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SwiperStyled = styled(Swiper)`
  width: 100vw;
  height: 100%;
  transform: translateY(5px);
  position: relative;
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
