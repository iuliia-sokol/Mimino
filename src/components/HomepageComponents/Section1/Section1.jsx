import { React } from 'react';
import { Box } from 'components/Box';
import { Navigation, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';

import { SwiperButtonPrev, SwiperButtonNext } from '../../Swiper/SwiperBtns';

import {
  Section1Wrapper,
  BlockWrapper,
  DataWrapper,
  ImageWrapper,
  SubHeader,
  Header,
  Data,
  BlockWrapperReversed,
  DataAccented,
  ImageWrapperReversed,
  SwiperStyled,
  SlideStyled,
} from './Section1.styled';

import Pic1_1x from '../../../images/homepage/desktop/main-restaurant-interior-1x.jpg';
import Pic1_2x from '../../../images/homepage/desktop/main-restaurant-interior-2x.jpg';
import Pic2_1x from '../../../images/homepage/desktop/main-restaurant-interior-2-1x.jpg';
import Pic2_2x from '../../../images/homepage/desktop/main-restaurant-interior-2-2x.jpg';
import Pic3_1x from '../../../images/homepage/desktop/main-restaurant-interior-3-1x.jpg';
import Pic3_2x from '../../../images/homepage/desktop/main-restaurant-interior-3-2x.jpg';
import Pic4_1x from '../../../images/homepage/desktop/main-restaurant-interior-4-1x.jpg';
import Pic4_2x from '../../../images/homepage/desktop/main-restaurant-interior-4-2x.jpg';
import Pic5_1x from '../../../images/homepage/desktop/main-restaurant-interior-5-1x.jpg';
import Pic5_2x from '../../../images/homepage/desktop/main-restaurant-interior-5-2x.jpg';
import Pic6_1x from '../../../images/homepage/desktop/main-restaurant-interior-6-1x.jpg';
import Pic6_2x from '../../../images/homepage/desktop/main-restaurant-interior-6-2x.jpg';

export const Section1 = () => {
  return (
    <Section1Wrapper>
      <Box pr={['15px', '47px', '85px']} pl={['15px', '47px', '85px']}>
        <BlockWrapper>
          <DataWrapper>
            <SubHeader>Amet minim mollit non</SubHeader>
            <Header>MIMIHO</Header>
            <Data>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Data>
          </DataWrapper>
          <ImageWrapper>
            <img
              srcSet={`${Pic1_1x} 1x, ${Pic1_2x} 2x`}
              src={Pic1_1x}
              alt="interrior"
              loading="lazy"
            />
          </ImageWrapper>
        </BlockWrapper>
        <BlockWrapperReversed>
          <DataWrapper>
            <DataAccented>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </DataAccented>
          </DataWrapper>
          <ImageWrapperReversed>
            <img
              srcSet={`${Pic2_1x} 1x, ${Pic2_2x} 2x`}
              src={Pic2_1x}
              alt="interrior"
              loading="lazy"
            />
          </ImageWrapperReversed>
        </BlockWrapperReversed>

        <div>
          <SwiperStyled
            modules={[Navigation, Autoplay]}
            navigation
            autoplay
            spaceBetween={25}
            slidesPerView={1}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={swiper => console.log(swiper)}
          >
            <SlideStyled>
              <img
                srcSet={`${Pic3_1x} 1x, ${Pic3_2x} 2x`}
                src={Pic3_1x}
                alt="interrior"
                loading="lazy"
              />
            </SlideStyled>
            <SlideStyled>
              <img
                srcSet={`${Pic4_1x} 1x, ${Pic4_2x} 2x`}
                src={Pic4_1x}
                alt="interrior"
                loading="lazy"
              />
            </SlideStyled>
            <SlideStyled>
              <img
                srcSet={`${Pic5_1x} 1x, ${Pic5_2x} 2x`}
                src={Pic5_1x}
                alt="interrior"
                loading="lazy"
              />
            </SlideStyled>
            <SlideStyled>
              {' '}
              <img
                srcSet={`${Pic6_1x} 1x, ${Pic6_2x} 2x`}
                src={Pic6_1x}
                alt="interrior"
                loading="lazy"
              />
            </SlideStyled>
            <SwiperButtonPrev>Prev</SwiperButtonPrev>
            <SwiperButtonNext>Next</SwiperButtonNext>
          </SwiperStyled>
        </div>
      </Box>
    </Section1Wrapper>
  );
};
