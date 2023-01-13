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
  slidesPerView = 'auto',
  spaceBetween = 0,
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
      // slidesPerView={slidesPerView}
      centeredSlides={true}
      breakpoints={{
        414: {
          spaceBetween: spaceBetween[0],
          slidesPerView: 1,
        },
        1024: {
          spaceBetween: spaceBetween[1],
          slidesPerView: slidesPerView - 1,
        },
        1280: {
          spaceBetween: spaceBetween[2],
          slidesPerView: slidesPerView,
        },
      }}
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
