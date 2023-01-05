import { Box } from 'components/Box';
import { MdLocationOn } from 'react-icons/md';
import { ButtonStandart } from 'components/Buttons/ButtonStandart/ButtonStandart';
import {
  Title,
  HeroWrapper,
  DescriptionText,
  Slogan,
  LocationText,
  LocationIconWrapper,
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

        <Box
          position="absolute"
          bottom={[null, '0px', null]}
          left={[null, '47px', '85px']}
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="1px solid rgba(243, 198, 83, 0.7)"
          borderRadius="btnModal"
          pr={['8px', '10px', '16px']}
          pl={['8px', '10px', '16px']}
          pt={'8px'}
          pb={'8px'}
        >
          <LocationIconWrapper>
            <MdLocationOn />
          </LocationIconWrapper>
          <LocationText>
            Україна, м. Полтава, <br />
            вул. Маршала Бірюзова, 15
          </LocationText>
        </Box>
        <Box
          display="flex"
          alignSelf="flex-end"
          justifyContent="flex-end"
          //   pr={['89px', '47px', '85px']}
          //   pl={['89px', '47px', '85px']}
          width={[1, 1 / 2, 1 / 2]}
        >
          <ButtonStandart text="Забронювати столик"></ButtonStandart>
          <ButtonStandart text="Забронювати номер"></ButtonStandart>
        </Box>
      </Box>
    </HeroWrapper>
  );
};
