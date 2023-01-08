import { Box } from 'components/Box';
import { SocialMediaLinks } from '../SocialMediaLinks/SocialMediaLinks';
import { LocationBanner } from '../LocationBanner/LocationBanner';

import {
  HeaderLinksItem,
  LogoLink,
  HeaderLocationBanner,
  HeaderSocialMediaLinksWrapper,
} from './Header.styled';
import { PhoneLink } from 'components/PhoneLink/PhoneLink';

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
          alignSelf="flex-end"
          justifyContent="flex-end"
        >
          <HeaderLinksItem>
            <PhoneLink
              to="restaurant"
              href="tel:0955559533"
              abonent="Ресторан"
              number="095 555 95 33"
              linkLocation="header"
            />
          </HeaderLinksItem>

          <HeaderLinksItem>
            <PhoneLink
              to="hotel"
              href="tel:0668491089"
              abonent="Готель"
              number="066 849 10 89"
              linkLocation="header"
            />
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
