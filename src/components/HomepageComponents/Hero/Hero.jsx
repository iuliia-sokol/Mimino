import { Box } from 'components/Box';
import { LocationBanner } from '../../LocationBanner/LocationBanner';
import { SocialMediaLinks } from '../../SocialMediaLinks/SocialMediaLinks';
import { ButtonStandart } from 'components/Buttons/ButtonStandart/ButtonStandart';
import {
  Title,
  HeroWrapper,
  DescriptionText,
  Slogan,
  HeroLocationBanner,
  HeroBtnsWrapper,
  HeroContentWrapper,
  HeroSocialMediaLinksWrapper,
} from './Hero.styled';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';

export const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [statusModal, setStatusModal] = useState('');

  const toggleModal = status => {
    setShowModal(!showModal);
    setStatusModal(status);

    if (showModal) {
      document.body.style.overflow = 'auto';
    }
    if (!showModal) {
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <HeroWrapper>
      <Box
        pr={['15px', '47px', '85px']}
        pl={['15px', '47px', '85px']}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Title>MIMIHO</Title>
          <DescriptionText>Ресторанно-готельний комплекс</DescriptionText>
          <Slogan>СМАК ЖИТТЯ 24/7</Slogan>
        </Box>

        <HeroContentWrapper>
          <HeroLocationBanner>
            <LocationBanner />
          </HeroLocationBanner>

          <HeroBtnsWrapper>
            <ButtonStandart
              onClick={() => toggleModal('table')}
              text="Забронювати столик"
            />
            <ButtonStandart
              onClick={() => toggleModal('room')}
              text="Забронювати номер"
            />
          </HeroBtnsWrapper>
        </HeroContentWrapper>

        <HeroSocialMediaLinksWrapper>
          <SocialMediaLinks location="header" />
        </HeroSocialMediaLinksWrapper>
      </Box>
      {showModal && <Modal closeModal={toggleModal} status={statusModal} />}
    </HeroWrapper>
  );
};
