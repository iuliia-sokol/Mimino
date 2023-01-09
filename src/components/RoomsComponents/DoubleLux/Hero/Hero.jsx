import { Box } from 'components/Box';
import { LocationBanner } from '../../../LocationBanner/LocationBanner';
import { SocialMediaLinks } from '../../../SocialMediaLinks/SocialMediaLinks';
import { ButtonStandart } from 'components/Buttons/ButtonStandart/ButtonStandart';
import {
  Title,
  DataBlock,
  HeroWrapper,
  DescriptionText,
  HeroLocationBanner,
  HeroBtnsWrapper,
  HeroContentWrapper,
  HeroSocialMediaLinksWrapper,
  SliderWrapper,
  HeaderLayout,
} from './Hero.styled';
import { HeroSlider } from 'components/Swiper/HeroSwiper';
import { doubleLux } from '../../../../utils/roomsImages';

export const Hero = () => {
  return (
    <HeroWrapper>
      <SliderWrapper>
        <HeroSlider images={doubleLux} />
      </SliderWrapper>
      <HeaderLayout></HeaderLayout>
      <Box
        pr={['15px', '47px', '85px']}
        pl={['15px', '47px', '85px']}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        // position="relative"
      >
        <DataBlock>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Title>MIMIHO</Title>
            <DescriptionText>Готель</DescriptionText>
          </Box>

          <HeroContentWrapper>
            <HeroLocationBanner>
              <LocationBanner />
            </HeroLocationBanner>

            <HeroBtnsWrapper>
              <ButtonStandart text="Забронювати номер"></ButtonStandart>
              <ButtonStandart text="Переглянути ціни"></ButtonStandart>
            </HeroBtnsWrapper>
          </HeroContentWrapper>

          <HeroSocialMediaLinksWrapper>
            <SocialMediaLinks location="header" />
          </HeroSocialMediaLinksWrapper>
        </DataBlock>
      </Box>
    </HeroWrapper>
  );
};
