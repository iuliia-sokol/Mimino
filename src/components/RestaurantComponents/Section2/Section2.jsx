import { Box } from 'components/Box';

import {
  Section1Wrapper,
  BlockWrapper,
  DataWrapper,

  SubHeader,
  Header,
  Data,

} from './Section2.styled';




export const Section2 = () => {
  return (
    <Section1Wrapper>
      <Box
        display="flex"
        flexDirection="column"
        pr={['15px', '47px', '85px']}
        pl={['15px', '47px', '85px']}
      >
        <BlockWrapper>
          <DataWrapper>
            <SubHeader>Amet minim mollit non</SubHeader>
            <Header>MIMIHO</Header>
            <Data>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Data>
          </DataWrapper>
          
        </BlockWrapper>
        
      </Box>
    </Section1Wrapper>
  );
};
