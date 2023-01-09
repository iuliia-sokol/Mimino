import { Box } from 'components/Box';
import { Hero } from 'components/HotelComponents/Hero/Hero';
import { Section1 } from 'components/HotelComponents/Section1/Section1';
import { Section2 } from 'components/HotelComponents/Section2/Section2';

const Hotel = () => {
  return (
    <Box as="main" width={[1, 1, 1]}>
      <Hero />
      <Section1 />
      <Section2 />
    </Box>
  );
};

export default Hotel;
