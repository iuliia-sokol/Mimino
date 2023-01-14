import { Box } from 'components/Box';

import {
  Section2Wrapper,
  BlockWrapper,
  DataWrapper,
  ImageWrapper,
  SubHeader,
  Header,
  Data,
  SliderWrapper,
  BtnsWrapper,
  SliderBtnsWrapper,
  RoomName,
} from './Section2.styled';

import Pic1_1x from '../../../images/hotel/sec2-1-1x.jpg';
import Pic1_2x from '../../../images/hotel/sec2-1-2x.jpg';

import { sectionSlider2 } from '../../../utils/hotelImages';
import { Slider } from 'components/Swiper/Swiper';
import { ButtonStandartNavLink } from 'components/Buttons/ButtonStandart/ButtonStandartNavLink';
import { ButtonStandart } from 'components/Buttons/ButtonStandart/ButtonStandart';

export const Section2 = () => {
  return (
    <Section2Wrapper>
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
            <RoomName>ТРЬОХМІСНИЙ НОМЕР</RoomName>
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
            <Slider
              slidesPerView={[2, 2]}
              spaceBetween={[25, 40, 40]}
              images={sectionSlider2}
            />
          </SliderWrapper>
          <BtnsWrapper>
            <ButtonStandartNavLink to="triple" text="Детальніше" />
            <ButtonStandart text="Переглянути ціни" />
          </BtnsWrapper>
        </SliderBtnsWrapper>
      </Box>
    </Section2Wrapper>
  );
};
