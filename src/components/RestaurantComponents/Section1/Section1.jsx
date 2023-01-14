import { Box } from 'components/Box';

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
  SliderWrapper,
} from './Section1.styled';

import Pic1_1x from '../../../images/restaurant/rest-sec1-1x.jpg';
import Pic1_2x from '../../../images/restaurant/rest-sec1-2x.jpg';
import Pic2_1x from '../../../images/restaurant/rest-sec1-2-1x.jpg';
import Pic2_2x from '../../../images/restaurant/rest-sec1-2-2x.jpg';

import { sectionSlider1 } from '../../../utils/restImages';
import { Slider } from 'components/Swiper/Swiper';

export const Section1 = () => {
  return (
    <Section1Wrapper>
      <Box
        display="flex"
        flexDirection="column"
        pr={['15px', '47px', '85px']}
        pl={['15px', '47px', '85px']}
      >
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
        <SliderWrapper>
          <Slider
            images={sectionSlider1}
            slidesPerView={[2, 2]}
            spaceBetween={[25, 40, 40]}
          />
        </SliderWrapper>
      </Box>
    </Section1Wrapper>
  );
};
