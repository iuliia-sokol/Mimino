import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SwiperStyled = styled(Swiper)`
  width: ${p =>
    p.size === 'large'
      ? p.theme.sizes.sliderWidthMobile[1]
      : p.theme.sizes.sliderWidthMobile[0]};
  & > .swiper-wrapper {
    display: flex;
    margin-bottom: 20px;
    /* gap: ${p => (p.size === 'large' ? '0px' : '5px')}; */
  }

  @media screen and (min-width: 1024px) {
    width: ${p =>
      p.size === 'large'
        ? p.theme.sizes.sliderWidthTablet[1]
        : p.theme.sizes.sliderWidthTablet[0]};
    & > .swiper-wrapper {
      margin-bottom: 32px;
      /* gap: ${p => (p.size === 'large' ? '0px' : '6px')}; */
    }
  }

  @media screen and (min-width: 1280px) {
    width: ${p =>
      p.size === 'large'
        ? p.theme.sizes.sliderWidthDesktop[1]
        : p.theme.sizes.sliderWidthDesktop[0]};
    & > .swiper-wrapper {
      margin-bottom: 36px;
      /* gap: ${p => (p.size === 'large' ? '46px' : 'none')}; */
    }
  }
`;

export const SlideStyled = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${p => (p.size === 'large' ? '10px' : '12.5px')};
  margin-right: ${p => (p.size === 'large' ? '10px' : '12.5px')};

  &.swiper-slide-active > img {
    box-shadow: 2px 2px 60px 2px rgba(0, 0, 0, 0.25);
  }

  & > img {
    border-radius: 2px;
    max-width: ${p =>
      p.size === 'large'
        ? p.theme.sizes.slideLargeWidth[0]
        : p.theme.sizes.slideStandart[0]};
    height: ${p =>
      p.size === 'large'
        ? p.theme.sizes.slideLargeHeight[0]
        : p.theme.sizes.slideStandart[0]};
  }

  @media screen and (min-width: 1024px) {
    margin-right: ${p => (p.size === 'large' ? '17px' : '20px')};
    margin-left: ${p => (p.size === 'large' ? '17px' : '20px')};

    & > img {
      max-width: ${p =>
        p.size === 'large'
          ? p.theme.sizes.slideLargeWidth[1]
          : p.theme.sizes.slideStandart[1]};
      height: ${p =>
        p.size === 'large'
          ? p.theme.sizes.slideLargeHeight[1]
          : p.theme.sizes.slideStandart[1]};
    }
  }

  @media screen and (min-width: 1280px) {
    margin-right: ${p => (p.size === 'large' ? '43px' : '20px')};
    margin-left: ${p => (p.size === 'large' ? '43px' : '20px')};

    & > img {
      max-width: ${p =>
        p.size === 'large'
          ? p.theme.sizes.slideLargeWidth[2]
          : p.theme.sizes.slideStandart[2]};
      height: ${p =>
        p.size === 'large'
          ? p.theme.sizes.slideLargeHeight[2]
          : p.theme.sizes.slideStandart[2]};
    }
  }
`;

export const SwiperBtnsWrapper = styled.div`
  display: flex;
  justify-content: ${p => (p.position === 'left' ? 'flex-start' : 'flex-end')};
  gap: 32px;
`;
