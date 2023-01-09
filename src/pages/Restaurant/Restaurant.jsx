import { Box } from 'components/Box';
import { Hero } from 'components/RestaurantComponents/Hero/Hero';
import { Section1 } from 'components/RestaurantComponents/Section1/Section1';
import { Section2 } from 'components/RestaurantComponents/Section2/Section2';

const Restaurant = () => {
  return (
    <Box as="main">
      <Hero />
      <Section1 />
      <Section2 />
    </Box>
  );
};

export default Restaurant;
