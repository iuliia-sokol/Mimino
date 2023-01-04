import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  FooterLink,
  FooterSocialMediaLink,
  FooterLinkListItem,
  FooterSocialMediaLinkListItem,
  FooterLinksWrapper,
} from './SharedLayout.styled';
import { Box } from 'components/Box';
import { TbBrandTelegram } from 'react-icons/tb';
import { RiFacebookBoxLine } from 'react-icons/ri';
import { FiInstagram } from 'react-icons/fi';
// import { Loader } from '../../components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <>
      <Box
        as="header"
        width={[1, 1, 1]}
        pt={['40px', '80px', null]}
        pb={['40px', '80px', null]}
        pr={['15px', '47px', '85px']}
        pl={['15px', '47px', '85px']}
      >
        <nav>
          {/* <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link> */}
        </nav>
      </Box>

      <Suspense fallback={<h1>Loading</h1>}>
        <Outlet />
      </Suspense>
      <Box
        as="footer"
        width={[1, 1, 1]}
        pt={['40px', '80px', null]}
        pb={['40px', '80px', null]}
        pr={['15px', '47px', '85px']}
        pl={['15px', '47px', '85px']}
        bg="footerBg"
        display="flex"
        alignItems="base-line"
        // justifyContent="space-between"
      >
        <Box
          as="p"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexGrow="1"
          fontFamily="logo"
          fontSize={['l', 'xl', null]}
          fontWeight={4}
          letterSpacing="logo"
          lineHeight="logo"
          color="mainAccent"
          ml={['44px', '107px', '131px']}
          mt={['58px', '37px', '40px']}
          mb={['58px', '37px', '35px']}
        >
          MIMIHO
        </Box>
        <FooterLinksWrapper>
          <Box as="ul">
            <FooterLinkListItem>
              <FooterLink to="/" end>
                Головна
              </FooterLink>
            </FooterLinkListItem>
            <FooterLinkListItem>
              <FooterLink to="/restaurant">Ресторан</FooterLink>
            </FooterLinkListItem>
            <FooterLinkListItem>
              <FooterLink to="/hotel">Готель</FooterLink>
            </FooterLinkListItem>
          </Box>
          <Box
            as="ul"
            display="flex"
            flexDirection={['row', 'row', 'column']}
            mt={['32px', '0px', null]}
            mb={['0px', null, null]}
          >
            <FooterSocialMediaLinkListItem>
              <FooterSocialMediaLink href="#">
                <span>Telegram</span>
                <TbBrandTelegram />
              </FooterSocialMediaLink>
            </FooterSocialMediaLinkListItem>
            <FooterSocialMediaLinkListItem>
              <FooterSocialMediaLink href="#">
                <span>Facebook</span>
                <RiFacebookBoxLine />
              </FooterSocialMediaLink>
            </FooterSocialMediaLinkListItem>
            <FooterSocialMediaLinkListItem>
              <FooterSocialMediaLink href="#">
                <span>Instagram</span>
                <FiInstagram />
              </FooterSocialMediaLink>
            </FooterSocialMediaLinkListItem>
          </Box>
        </FooterLinksWrapper>
      </Box>
    </>
  );
};
