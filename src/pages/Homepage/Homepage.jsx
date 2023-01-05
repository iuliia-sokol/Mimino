import { Box } from 'components/Box';
import { Hero } from 'components/HomepageComponents/Hero/Hero';
import { Section1 } from 'components/HomepageComponents/Section1/Section1';

const Homepage = () => {
  return (
    <Box as="main" width={[1, 1, 1]}>
      <Hero />
      <Section1 />
    </Box>
  );
};

export default Homepage;
