import { Navigation, Autoplay } from 'swiper';

// import 'swiper/css';
import 'swiper/css/autoplay';

import { SwiperStyled, SlideStyled, SwiperBtnsWrapper } from './Swiper.styled';

import { SwiperButtonPrev, SwiperButtonNext } from './SwiperBtns';

export const Slider = ({ images, background = 'dark', size = 'standart' }) => {
  return (
    <SwiperStyled
      size={size}
      modules={[Navigation, Autoplay]}
      navigation
      autoplay
      grabCursor={true}
      slidesPerView={'auto'}
      centeredSlides={true}
      breakpoints={{
        414: { spaceBetween: 20 },
        1024: { spaceBetween: 34 },
        1280: { spaceBetween: 40 },
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
      <SwiperBtnsWrapper size={size}>
        <SwiperButtonPrev background={background}></SwiperButtonPrev>
        <SwiperButtonNext background={background}></SwiperButtonNext>
      </SwiperBtnsWrapper>
    </SwiperStyled>
  );
};
