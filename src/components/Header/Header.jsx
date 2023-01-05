import { Box } from 'components/Box';
import { SocialMediaLinks } from '../SocialMediaLinks/SocialMediaLinks';
import { VscDeviceMobile } from 'react-icons/vsc';
import {
  HeaderLinksItem,
  HeaderLinkText,
  HeaderLink,
  HeaderLinkPhoneWrapper,
  Phone,
  LogoLink,
} from './Header.styled';

export const Header = () => {
  return (
    <Box as="header" position="absolute" top="0px" width={[1, 1, 1]}>
      <Box
        pt={['28px', '30px', null]}
        pb={['12px', '30px', null]}
        pr={['15px', '47px', '85px']}
        pl={['15px', '47px', '85px']}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        overflow="hidden"
      >
        <LogoLink to="/" end>
          MIMIHO
        </LogoLink>

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
              p="0px"
              mt={['0px', null, null]}
              mb={['0px', null, null]}
            >
              <SocialMediaLinks location="header" />
            </Box>
          </HeaderLinksItem>
        </Box>
      </Box>
    </Box>
  );
};
