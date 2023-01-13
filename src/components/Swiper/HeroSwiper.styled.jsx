import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SwiperStyled = styled(Swiper)`
  width: 100%;
  height: 100%;
  transform: translateY(5px);

  & > swiper-wrapper {
    /* overflow: hidden; */
  }
`;

export const SlideStyled = styled(SwiperSlide)`
  /* position: absolute; */
  width: 100vw;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: stretch;
  /* background-position: center;
  background-size: cover; */

  & > img {
    flex-grow: 1;
    /* display: block; */
    width: 100%;
    height: 100%;
  }
`;

export const SwiperBtnsWrapper = styled.div`
  display: flex;
  justify-content: ${p => (p.position === 'left' ? 'flex-start' : 'flex-end')};
  gap: 32px;
`;
