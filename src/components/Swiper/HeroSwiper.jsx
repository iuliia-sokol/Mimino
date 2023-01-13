import SwiperCore, { Navigation, Autoplay, EffectFade } from 'swiper';

import 'swiper/css/effect-fade';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/autoplay';

import { SwiperStyled, SlideStyled } from './HeroSwiper.styled';

SwiperCore.use([Navigation, EffectFade, Autoplay]);

export const HeroSlider = ({ images, refLink }) => {
  return (
    <SwiperStyled
      ref={refLink}
      modules={[Navigation, Autoplay, EffectFade]}
      autoplay
      grabCursor={true}
      speed={3000}
      effect={'fade'}
      fadeEffect={
        {
          // crossFade: true,
        }
      }
      slidesPerView={1}
      spaceBetween={0}
      rewind={true}
    >
      {images.map(img => {
        return (
          <SlideStyled key={img.min}>
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
    </SwiperStyled>
  );
};
