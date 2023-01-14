import { ReactSVG } from 'react-svg';
import ArrowRight from '../../../../images/icons/arrow-right.svg';
import { ButtonLarge } from 'components/Buttons/ButtonLarge/ButtonLarge';

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
  GoBackLink,
  Container,
} from './Section1.styled';

export const Section1 = () => {
  return (
    <Section1Wrapper id="menu">
      <Container>
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
          <GoBackLink to="/hotel">
            <span>Повернутися до перегляду номерів</span>
            <ReactSVG src={ArrowRight} />
          </GoBackLink>
        </ButtonWrapper>
      </Container>
    </Section1Wrapper>
  );
};
