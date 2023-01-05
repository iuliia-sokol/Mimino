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
        <Box>
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

        <Box
          as="ul"
          position="absolute"
          bottom="-10%"
          left="6%"
          display={['flex', 'flex', 'flex']}
          p="0px"
          mt={['0px', null, null]}
          mb={['0px', null, null]}
        >
          <SocialMediaLinks location="header" />
        </Box>
      </Box>
    </HeroWrapper>
  );
};
