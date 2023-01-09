import { Box } from 'components/Box';
import { LocationBanner } from '../../LocationBanner/LocationBanner';
import { SocialMediaLinks } from '../../SocialMediaLinks/SocialMediaLinks';
import { ButtonStandart } from 'components/Buttons/ButtonStandart/ButtonStandart';
import {
  Title,
  HeroWrapper,
  DescriptionText,
  HeroLocationBanner,
  HeroBtnsWrapper,
  HeroContentWrapper,
  HeroSocialMediaLinksWrapper,
} from './Hero.styled';

export const Hero = () => {
  return (
    <HeroWrapper>
      <Box
        pr={['15px', '47px', '85px']}
        pl={['15px', '47px', '85px']}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
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
      </Box>
    </HeroWrapper>
  );
};
