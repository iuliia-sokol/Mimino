import { Navigation, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';

import { SwiperStyled, SlideStyled } from './Swiper.styled';

import { SwiperButtonPrev, SwiperButtonNext } from './SwiperBtns';

export const Slider = ({ images }) => {
  return (
    <SwiperStyled
      modules={[Navigation, Autoplay]}
      navigation
      autoplay
      spaceBetween={25}
      slidesPerView={1}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={swiper => console.log(swiper)}
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

      <SwiperButtonPrev></SwiperButtonPrev>
      <SwiperButtonNext></SwiperButtonNext>
    </SwiperStyled>
  );
};
