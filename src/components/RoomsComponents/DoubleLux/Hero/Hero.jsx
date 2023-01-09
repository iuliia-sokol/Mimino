import { Box } from 'components/Box';
import { LocationBanner } from '../../../LocationBanner/LocationBanner';
import { SocialMediaLinks } from '../../../SocialMediaLinks/SocialMediaLinks';
import { ButtonStandart } from 'components/Buttons/ButtonStandart/ButtonStandart';
import {
  RoomName,
  DataBlock,
  HeroWrapper,
  DescriptionText,
  HeroLocationBanner,
  HeroBtnsWrapper,
  HeroSocialMediaLinksWrapper,
  SliderWrapper,
  HeaderLayout,
  TextWrapper,
} from './Hero.styled';
import { HeroSlider } from 'components/Swiper/HeroSwiper';
import { doubleLux } from '../../../../utils/roomsImages';

export const Hero = () => {
  return (
    <HeroWrapper>
      <HeaderLayout />
      <SliderWrapper>
        <HeroSlider images={doubleLux} />
      </SliderWrapper>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <DataBlock>
          <TextWrapper>
            <RoomName>ДВОМІСНИЙ НОМЕР люкс</RoomName>
            <DescriptionText>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </DescriptionText>
            <HeroLocationBanner>
              <LocationBanner />
            </HeroLocationBanner>
          </TextWrapper>

          <HeroSocialMediaLinksWrapper>
            <SocialMediaLinks location="header" />
          </HeroSocialMediaLinksWrapper>

          <HeroBtnsWrapper>
            <ButtonStandart text="Переглянути ціни"></ButtonStandart>
          </HeroBtnsWrapper>
        </DataBlock>
      </Box>
    </HeroWrapper>
  );
};
