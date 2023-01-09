import { Box } from 'components/Box';
import { Hero } from 'components/HotelComponents/Hero/Hero';
import { Section1 } from 'components/HotelComponents/Section1/Section1';

const Hotel = () => {
  return (
    <Box as="main" width={[1, 1, 1]}>
      <Hero />
      <Section1 />
    </Box>
  );
};

export default Hotel;
