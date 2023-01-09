import { Box } from 'components/Box';

import {
  Section1Wrapper,
  BlockWrapper,
  DataWrapper,
  ImageWrapper,
  SubHeader,
  Header,
  Data,
  SliderWrapper,
  BtnsWrapper,
  SliderBtnsWrapper,
} from './Section1.styled';

import Pic1_1x from '../../../images/hotel/sec1-1-1x.jpg';
import Pic1_2x from '../../../images/hotel/sec1-1-1x.jpg';

import { sectionSlider1 } from '../../../utils/hotelImages';
import { Slider } from 'components/Swiper/Swiper';
import { ButtonStandart } from 'components/Buttons/ButtonStandart/ButtonStandart';

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
        <SliderBtnsWrapper>
          <SliderWrapper>
            <Slider images={sectionSlider1} position="left" reverse={true} />
          </SliderWrapper>
          <BtnsWrapper>
            <ButtonStandart text="Детальніше" />
            <ButtonStandart text="Переглянути ціни" />
          </BtnsWrapper>
        </SliderBtnsWrapper>
      </Box>
    </Section1Wrapper>
  );
};
