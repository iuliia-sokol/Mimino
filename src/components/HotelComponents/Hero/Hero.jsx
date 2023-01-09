import { Box } from 'components/Box';
import { LocationBanner } from '../../LocationBanner/LocationBanner';
import { SocialMediaLinks } from '../../SocialMediaLinks/SocialMediaLinks';
import { ButtonStandart } from 'components/Buttons/ButtonStandart/ButtonStandart';
import {
  Title,
  HeroWrapper,
  DescriptionText,
  Slogan,
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
          <DescriptionText>Ресторанно-готельний комплекс</DescriptionText>
          <Slogan>СМАК ЖИТТЯ 24/7</Slogan>
        </Box>

        <HeroContentWrapper>
          <HeroLocationBanner>
            <LocationBanner />
          </HeroLocationBanner>

          <HeroBtnsWrapper>
            <ButtonStandart text="Забронювати столик"></ButtonStandart>
            <ButtonStandart text="Забронювати номер"></ButtonStandart>
          </HeroBtnsWrapper>
        </HeroContentWrapper>

        <HeroSocialMediaLinksWrapper>
          <SocialMediaLinks location="header" />
        </HeroSocialMediaLinksWrapper>
      </Box>
    </HeroWrapper>
  );
};
