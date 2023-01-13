import { useSwiper } from 'swiper/react';
import { ReactSVG } from 'react-svg';

import ArrowRight from '../../images/icons/arrow-right.svg';
import ArrowLeft from '../../images/icons/arrow-left.svg';
import { SwiperBtn } from './SwiperBtns.styled';

export const SwiperButtonNext = ({ background, refLink }) => {
  const swiper = useSwiper();
  return (
    <SwiperBtn
      ref={refLink}
      background={background}
      type="button"
      onClick={() => swiper.slideNext()}
    >
      <ReactSVG src={ArrowRight} />
    </SwiperBtn>
  );
};

export const SwiperButtonPrev = ({ background, refLink }) => {
  const swiper = useSwiper();
  return (
    <SwiperBtn
      ref={refLink}
      background={background}
      type="button"
      onClick={() => swiper.slidePrev()}
    >
      <ReactSVG src={ArrowLeft} />
    </SwiperBtn>
  );
};
