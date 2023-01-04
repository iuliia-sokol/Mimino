import { Box } from 'components/Box';
import { SocialMediaLinks } from '../SocialMediaLinks/SocialMediaLinks';
import { VscDeviceMobile } from 'react-icons/vsc';
import {
  HeaderLinksItem,
  HeaderLinkText,
  HeaderLink,
  HeaderLinkPhoneWrapper,
  Phone,
} from './Header.styled';

export const Header = () => {
  return (
    <Box
      as="header"
      position="absolute"
      overflow="hidden"
      width={[1, 1, 1]}
      pt={['28px', '30px', null]}
      pb={['12px', '30px', null]}
      pr={['15px', '47px', '85px']}
      pl={['15px', '47px', '85px']}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box
        as="p"
        display="flex"
        alignItems="center"
        justifyContent="center"
        // flexGrow="1"
        fontFamily="logo"
        fontSize={['m', 'l', null]}
        fontWeight={4}
        letterSpacing="logo"
        lineHeight="logo"
        color="mainLight"
        // ml={['44px', '107px', '131px']}
        // mt={['58px', '37px', '40px']}
        // mb={['58px', '37px', '35px']}
      >
        MIMIHO
      </Box>

      <Box
        as="ul"
        display="flex"
        //   flexGrow="2"
      >
        <HeaderLinksItem>
          <HeaderLink href="tel:0955559533">
            <HeaderLinkText>Ресторан</HeaderLinkText>
            <HeaderLinkPhoneWrapper>
              <VscDeviceMobile />
              <Phone>095 555 95 33</Phone>
            </HeaderLinkPhoneWrapper>
          </HeaderLink>
        </HeaderLinksItem>
        <HeaderLinksItem>
          <HeaderLink href="tel:0668491089">
            <HeaderLinkText>Готель</HeaderLinkText>
            <HeaderLinkPhoneWrapper>
              <VscDeviceMobile />
              <Phone>066 849 10 89</Phone>
            </HeaderLinkPhoneWrapper>
          </HeaderLink>
        </HeaderLinksItem>
        <HeaderLinksItem>
          <Box
            as="ul"
            display={['none', 'none', 'flex']}
            mt={['0px', null, null]}
            mb={['0px', null, null]}
          >
            <SocialMediaLinks location="header" />
          </Box>
        </HeaderLinksItem>
      </Box>
    </Box>
  );
};
