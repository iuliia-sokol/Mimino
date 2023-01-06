import { Navigation, Autoplay } from 'swiper';

// import 'swiper/css';
import 'swiper/css/autoplay';

import { SwiperStyled, SlideStyled, SwiperBtnsWrapper } from './Swiper.styled';

import { SwiperButtonPrev, SwiperButtonNext } from './SwiperBtns';

export const Slider = ({ images, background = 'dark' }) => {
  return (
    <SwiperStyled
      modules={[Navigation, Autoplay]}
      navigation
      autoplay
      grabCursor={true}
      slidesPerView={'auto'}
      centeredSlides={true}
      // centeredSlides={true}
      //   spaceBetween={25}
      breakpoints={{ 414: { spaceBetween: 25 }, 1024: { spaceBetween: 40 } }}
      rewind={true}
    >
      {images.map(img => {
        return (
          <SlideStyled key={img.min}>
            <img
              srcSet={`${img.min} 1x, ${img.max} 2x`}
              src={img.min}
              alt={img.tag}
              loading="lazy"
            />
          </SlideStyled>
        );
      })}
      <SwiperBtnsWrapper>
        <SwiperButtonPrev background={background}></SwiperButtonPrev>
        <SwiperButtonNext background={background}></SwiperButtonNext>
      </SwiperBtnsWrapper>
    </SwiperStyled>
  );
};
