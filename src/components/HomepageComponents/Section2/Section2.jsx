import { Box } from 'components/Box';
import { Slider } from 'components/Swiper/Swiper';
import { sectionSlider2 } from '../../../utils/homepageImages';
import {
  Section2Wrapper,
  DataWrapper,
  SubHeader,
  Header,
  Data,
  SliderWrapper,
} from './Section2.styled';

export const Section2 = () => {
  return (
    <Section2Wrapper>
      <Box
        pr={['15px', '47px', '85px']}
        pl={['15px', '47px', '85px']}
        display="flex"
        flexDirection="column"
      >
        <DataWrapper>
          <Header>MIMIHO</Header>
          <SubHeader>Ресторан</SubHeader>
          <Data>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </Data>
        </DataWrapper>
        <SliderWrapper>
          <Slider images={sectionSlider2} background="light" size="large" />
        </SliderWrapper>
      </Box>
    </Section2Wrapper>
  );
};
