import {
  FooterLink,
  FooterLinkListItem,
  FooterLinksWrapper,
  LogoLink,
} from './Footer.styled';
import { Box } from 'components/Box';
import { SocialMediaLinks } from 'components/SocialMediaLinks/SocialMediaLinks';

export const Footer = () => {
  return (
    <Box
      as="footer"
      width={[1, 1, 1]}
      pt={['40px', '80px', null]}
      pb={['40px', '80px', null]}
      pr={['15px', '47px', '85px']}
      pl={['15px', '47px', '85px']}
      bg="footerBg"
      display="flex"
    >
      <LogoLink to="/" end>
        MIMIHO
      </LogoLink>

      <FooterLinksWrapper>
        <Box as="ul">
          <FooterLinkListItem>
            <FooterLink to="/" end>
              Головна
            </FooterLink>
          </FooterLinkListItem>
          <FooterLinkListItem>
            <FooterLink to="restaurant">Ресторан</FooterLink>
          </FooterLinkListItem>
          <FooterLinkListItem>
            <FooterLink to="hotel">Готель</FooterLink>
          </FooterLinkListItem>
        </Box>
        <Box
          as="ul"
          display="flex"
          flexDirection={['row', 'row', 'column']}
          mt={['32px', '0px', null]}
          mb={['0px', null, null]}
        >
          <SocialMediaLinks location="footer" />
        </Box>
      </FooterLinksWrapper>
    </Box>
  );
};
