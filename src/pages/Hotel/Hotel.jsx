import { Box } from 'components/Box';
import { Hero } from 'components/HotelComponents/Hero/Hero';
import { Section1 } from 'components/HotelComponents/Section1/Section1';
import { Section2 } from 'components/HotelComponents/Section2/Section2';
import { Section3 } from 'components/HotelComponents/Section3/Section3';

const Hotel = () => {
  return (
    <Box as="main" width={[1, 1, 1]}>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
    </Box>
  );
};

export default Hotel;
