import { Box } from 'components/Box';

import { ButtonLarge } from 'components/Buttons/ButtonLarge/ButtonLarge';
import { GoBackLink } from 'components/GoBackLink/GoBackLink';

import {
  Section1Wrapper,
  ButtonWrapper,
  HeaderWrapper,
  Header,
  HeaderText,
  Text,
  ContentBlockWrapper,
  SubHeader,
  ContentWrapper,
} from './Section1.styled';

export const Section1 = () => {
  return (
    <Section1Wrapper id="menu">
      <Box
        display="flex"
        flexDirection="column"
        pr={['15px', '47px', '85px']}
        pl={['15px', '47px', '85px']}
      >
        <HeaderWrapper>
          <Header>ЗРУЧНОСТІ У НОМЕРІ</Header>
          <HeaderText>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </HeaderText>
        </HeaderWrapper>
        <ContentBlockWrapper>
          <SubHeader>ЗАГАЛЬНІ</SubHeader>
          <ContentWrapper>
            <Text>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Text>
            <Text>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Text>
          </ContentWrapper>
        </ContentBlockWrapper>
        <ContentBlockWrapper>
          <SubHeader>ВАННА КІМНАТА</SubHeader>
          <ContentWrapper>
            <Text>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Text>
            <Text>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Text>
          </ContentWrapper>
        </ContentBlockWrapper>
        <ContentBlockWrapper>
          <SubHeader>СПАЛЬНЯ</SubHeader>
          <ContentWrapper>
            <Text>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </Text>
            <Text></Text>
          </ContentWrapper>
        </ContentBlockWrapper>
        <ContentBlockWrapper>
          <SubHeader>КУХНЯ</SubHeader>
          <ContentWrapper>
            <Text>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </Text>
            <Text>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </Text>
          </ContentWrapper>
        </ContentBlockWrapper>
        <ContentBlockWrapper>
          <SubHeader>МЕДІА</SubHeader>
          <ContentWrapper>
            <Text>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </Text>
            <Text></Text>
          </ContentWrapper>
        </ContentBlockWrapper>
        <ButtonWrapper>
          <ButtonLarge text="ОФОРМИТИ БРОНЮВАННЯ" />
          <GoBackLink to="/hotel" text="Повернутися до перегляду номерів" />
        </ButtonWrapper>
      </Box>
    </Section1Wrapper>
  );
};
