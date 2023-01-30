import { Box } from 'components/Box';
import { ButtonStandart } from 'components/Buttons/ButtonStandart/ButtonStandart';
import { Modal } from 'components/Modal/Modal';
import { Slider } from 'components/Swiper/Swiper';
import { useState } from 'react';
import { sectionSlider4 } from '../../../utils/homepageImages';
import {
  Section4Wrapper,
  DataWrapper,
  SubHeader,
  Header,
  Data,
  SliderWrapper,
  SliderButtonWrapper,
  BtnsWrapper,
} from './Section4.styled';

export const Section4 = () => {
  const [showModal, setShowModal] = useState(false);
  const [statusModal, setStatusModal] = useState('');

  const toggleModal = status => {
    setShowModal(!showModal);
    setStatusModal(status);
  };
  return (
    <Section4Wrapper>
      <Box
        pr={['15px', '47px', '85px']}
        pl={['15px', '47px', '85px']}
        display="flex"
        flexDirection="column"
      >
        <DataWrapper>
          <Header>MIMIHO</Header>
          <SubHeader>Ресторан</SubHeader>
          <Data>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </Data>
        </DataWrapper>
        <SliderButtonWrapper>
          <BtnsWrapper>
            <ButtonStandart
              text="Забронювати номер"
              onClick={() => toggleModal('room')}
            />
            <ButtonStandart text="Переглянути ціни" />
          </BtnsWrapper>
          <SliderWrapper>
            <Slider
              images={sectionSlider4}
              background="light"
              size="large"
              reverse={true}
              slidesPerView={[2, 3]}
              spaceBetween={[20, 34, 86]}
            />
          </SliderWrapper>
        </SliderButtonWrapper>
      </Box>
      {showModal && <Modal closeModal={toggleModal} status={statusModal} />}
    </Section4Wrapper>
  );
};
