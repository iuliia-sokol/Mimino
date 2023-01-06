import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SwiperStyled = styled(Swiper)`
  & > .swiper-wrapper {
    display: flex;
    gap: 25px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1024px) {
    width: 428px;
    & > .swiper-wrapper {
      gap: 40px;
      margin-bottom: 32px;
    }
  }

  @media screen and (min-width: 1280px) {
    width: 548px;
    & > .swiper-wrapper {
      margin-bottom: 36px;
    }
  }
`;

export const SlideStyled = styled(SwiperSlide)`
  & > img {
    box-shadow: 2px 2px 60px 2px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    width: 245px;
    height: 245px;
  }

  @media screen and (min-width: 1024px) {
    & > img {
      width: 194px;
      height: 194px;
    }
  }

  @media screen and (min-width: 1024px) {
    & > img {
      width: 254px;
      height: 254px;
    }
  }
`;

export const SwiperBtnsWrapper = styled.div`
  /* margin-left: -70px; */
  display: flex;
  justify-content: center;
  gap: 32px;
`;
