import { Box } from 'components/Box';
import { SocialMediaLinks } from '../SocialMediaLinks/SocialMediaLinks';

export const Header = () => {
  return (
    <Box
      as="header"
      width={[1, 1, 1]}
      pt={['28px', '30px', null]}
      pb={['12px', '30px', null]}
      pr={['15px', '47px', '85px']}
      pl={['15px', '47px', '85px']}
      display="flex"
      alignItems="base-line"
    >
      <Box
        as="p"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexGrow="1"
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
        display={['none', 'none', 'flex']}
        mt={['0px', null, null]}
        mb={['0px', null, null]}
      >
        <SocialMediaLinks location="header" />
      </Box>
    </Box>
  );
};
