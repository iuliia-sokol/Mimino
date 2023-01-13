import { useRef } from 'react';
import { Navigation, Autoplay } from 'swiper';

// import 'swiper/css';
import 'swiper/css/autoplay';

import { SwiperStyled, SlideStyled, SwiperBtnsWrapper } from './Swiper.styled';

import { SwiperButtonPrev, SwiperButtonNext } from './SwiperBtns';

export const Slider = ({
  images,
  background = 'dark',
  size = 'standart',
  position = 'right',
  reverse = false,
}) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <SwiperStyled
      size={size}
      modules={[Navigation, Autoplay]}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      onBeforeInit={swiper => {
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        swiper.params.navigation.nextEl = navigationNextRef.current;
      }}
      autoplay={{ reverseDirection: reverse }}
      grabCursor={true}
      slidesPerView={2}
      centeredSlides={true}
      // breakpoints={{
      //   414: { spaceBetween: 20 },
      //   1024: { spaceBetween: 34 },
      //   1280: { spaceBetween: 40 },
      // }}
      rewind={true}
    >
      {images.map(img => {
        return (
          <SlideStyled key={img.min} size={size}>
            <img
              srcSet={`${img.min} 1x, ${img.max} 2x`}
              src={img.min}
              alt={img.tag}
              loading="lazy"
            />
          </SlideStyled>
        );
      })}
      <SwiperBtnsWrapper position={position}>
        <SwiperButtonPrev
          refLink={navigationPrevRef}
          background={background}
        ></SwiperButtonPrev>
        <SwiperButtonNext
          refLink={navigationNextRef}
          background={background}
        ></SwiperButtonNext>
      </SwiperBtnsWrapper>
    </SwiperStyled>
  );
};
