import { Box } from 'components/Box';
import { Hero } from 'components/RoomsComponents/Triple/Hero/Hero';
import { Section1 } from 'components/RoomsComponents/Triple/Section1/Section1';

const RoomTriple = () => {
  return (
    <Box as="main" width={[1, 1, 1]}>
      <Hero />
      <Section1 />
    </Box>
  );
};

export default RoomTriple;
