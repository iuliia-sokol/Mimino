import { Box } from 'components/Box';
import { Hero } from 'components/RoomsComponents/DoubleLux/Hero/Hero';
import { Section1 } from 'components/RoomsComponents/DoubleLux/Section1/Section1';

const RoomDoubleLux = () => {
  return (
    <Box as="main" width={[1, 1, 1]}>
      <Hero />
      <Section1 />
    </Box>
  );
};

export default RoomDoubleLux;
