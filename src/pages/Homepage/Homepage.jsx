import { Box } from 'components/Box';
import { Hero } from 'components/HomepageComponents/Hero/Hero';

const Homepage = () => {
  return (
    <Box
      as="main"
      width={[1, 1, 1]}

      //   pt={['40px', '80px', null]}
      //   pb={['40px', '80px', null]}

      //   bg="footerBg"
      //   display="flex"
    >
      <Hero />
    </Box>
  );
};

export default Homepage;
