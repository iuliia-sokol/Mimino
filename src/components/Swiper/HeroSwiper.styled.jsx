import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SwiperStyled = styled(Swiper)`
  width: 100%;

  & > .swiper-wrapper {
    display: flex;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1024px) {
    & > .swiper-wrapper {
      margin-bottom: 32px;
    }
  }

  @media screen and (min-width: 1280px) {
    & > .swiper-wrapper {
      margin-bottom: 36px;
    }
  }
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

  @media screen and (min-width: 1024px) {
    & > img {
    }
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const SwiperBtnsWrapper = styled.div`
  display: flex;
  justify-content: ${p => (p.position === 'left' ? 'flex-start' : 'flex-end')};
  gap: 32px;
`;
