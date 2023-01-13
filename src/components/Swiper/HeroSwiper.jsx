import SwiperCore, { Navigation, Autoplay, EffectFade } from 'swiper';

import 'swiper/css/effect-fade';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/autoplay';

import {
  SwiperStyled,
  SlideStyled,
  // SwiperBtnsWrapper,
} from './HeroSwiper.styled';
import { useRef } from 'react';
import { SwiperButtonNext, SwiperButtonPrev } from './HeroSwiperBtns';

// import { SwiperButtonPrev, SwiperButtonNext } from './SwiperBtns';

SwiperCore.use([Navigation, EffectFade, Autoplay]);

export const HeroSlider = ({
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
      modules={[Navigation, Autoplay, EffectFade]}
      // navigation={true}
      autoplay={{ reverseDirection: reverse }}
      grabCursor={true}
      speed={3000}
      effect={'fade'}
      fadeEffect={
        {
          // crossFade: true,
        }
      }
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      onBeforeInit={swiper => {
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        swiper.params.navigation.nextEl = navigationNextRef.current;
      }}
      slidesPerView={1}
      spaceBetween={0}
      rewind={true}
    >
      {images.map(img => {
        return (
          <SlideStyled key={img.min} size={size}>
            <picture>
              <source
                media="(max-width: 414px)"
                srcSet={`${img.mobMin} 1x, ${img.mobMax} 2x`}
                sizes="1024px"
              />

              <source
                media="(max-width: 1024px)"
                srcSet={`${img.tabMin} 1x, ${img.tabMax} 2x`}
                sizes="1024px"
              />

              <source
                media="(max-width: 1280px)"
                srcSet={`${img.min} 1x, ${img.max} 2x`}
                sizes="1280px"
              />

              <source
                srcSet={`${img.min} 1280w, ${img.max} 2560w`}
                sizes="2560px"
              />

              <img src={img.max} alt={img.tag} />
            </picture>
          </SlideStyled>
        );
      })}

      <SwiperButtonPrev background={background}></SwiperButtonPrev>
      <SwiperButtonNext background={background}></SwiperButtonNext>
    </SwiperStyled>
  );
};
