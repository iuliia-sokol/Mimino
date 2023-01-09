import { Navigation, Autoplay, EffectFade } from 'swiper';

import 'swiper/css/effect-fade';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/autoplay';

import {
  SwiperStyled,
  SlideStyled,
  SwiperBtnsWrapper,
} from './HeroSwiper.styled';

import { SwiperButtonPrev, SwiperButtonNext } from './SwiperBtns';

export const HeroSlider = ({
  images,
  background = 'dark',
  size = 'standart',
  position = 'right',
  reverse = false,
}) => {
  return (
    <SwiperStyled
      size={size}
      modules={[Navigation, Autoplay, EffectFade]}
      navigation
      autoplay={{ reverseDirection: reverse }}
      grabCursor={true}
      speed={3000}
      effect="fade"
      fadeEffect={{
        crossFade: true, // enables slides to cross fade
      }}
      slidesPerView={1}
      spaceBetween={0}
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
        <SwiperButtonPrev background={background}></SwiperButtonPrev>
        <SwiperButtonNext background={background}></SwiperButtonNext>
      </SwiperBtnsWrapper>
    </SwiperStyled>
  );
};
