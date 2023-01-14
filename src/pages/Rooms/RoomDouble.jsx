import { Box } from 'components/Box';
import { Hero } from 'components/RoomsComponents/Double/Hero/Hero';
import { Section1 } from 'components/RoomsComponents/Double/Section1/Section1';

const RoomDouble = () => {
  return (
    <Box as="main" width={[1, 1, 1]}>
      <Hero />
      <Section1 />
    </Box>
  );
};

export default RoomDouble;
