import { Box } from 'components/Box';
import { SocialMediaLinks } from '../SocialMediaLinks/SocialMediaLinks';
import { LocationBanner } from '../LocationBanner/LocationBanner';

import {
  HeaderWrapper,
  HeaderLinksItem,
  LogoLink,
  HeaderLocationBanner,
  HeaderSocialMediaLinksWrapper,
} from './Header.styled';
import { PhoneLink } from 'components/PhoneLink/PhoneLink';

export const Header = ({ block }) => {
  return (
    <HeaderWrapper block={block}>
      <Box
        pt={['16px', '24px', null]}
        // pb={['12px', '30px', null]}
        pr={['15px', '47px', '85px']}
        pl={['15px', '47px', '85px']}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        overflow="hidden"
        zIndex="1000"
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
              linklocation="header"
            />
          </HeaderLinksItem>

          <HeaderLinksItem>
            <PhoneLink
              to="hotel"
              href="tel:0668491089"
              abonent="Готель"
              number="066 849 10 89"
              linklocation="header"
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
    </HeaderWrapper>
  );
};
