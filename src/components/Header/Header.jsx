import { Box } from 'components/Box';
import { VscDeviceMobile } from 'react-icons/vsc';

import { SocialMediaLinks } from '../SocialMediaLinks/SocialMediaLinks';
import { LocationBanner } from '../LocationBanner/LocationBanner';

import {
  HeaderLinksItem,
  HeaderLinkText,
  HeaderLink,
  HeaderLinkPhoneWrapper,
  Phone,
  LogoLink,
  HeaderLocationBanner,
  HeaderSocialMediaLinksWrapper,
} from './Header.styled';

export const Header = () => {
  return (
    <Box as="header" position="absolute" top="0px" width={[1, 1, 1]}>
      <Box
        pt={['16px', '24px', null]}
        // pb={['12px', '30px', null]}
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
            <HeaderSocialMediaLinksWrapper>
              <SocialMediaLinks location="header" />
            </HeaderSocialMediaLinksWrapper>
          </HeaderLinksItem>
        </Box>
        <HeaderLocationBanner>
          <LocationBanner />
        </HeaderLocationBanner>
      </Box>
    </Box>
  );
};
