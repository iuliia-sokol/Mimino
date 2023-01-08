import { Box } from 'components/Box';
import { Hero } from 'components/HomepageComponents/Hero/Hero';
import { Section1 } from 'components/HomepageComponents/Section1/Section1';
import { Section2 } from 'components/HomepageComponents/Section2/Section2';
import { Section3 } from 'components/HomepageComponents/Section3/Section3';
import { Section4 } from 'components/HomepageComponents/Section4/Section4';

const Homepage = () => {
  return (
    <Box as="main" width={[1, 1, 1]}>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Box>
  );
};

export default Homepage;
