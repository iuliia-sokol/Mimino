import { useCallback, useRef } from 'react';
import { Box } from 'components/Box';
import { ReactSVG } from 'react-svg';

import ArrowRight from '../../../../images/icons/arrow-right.svg';
import ArrowLeft from '../../../../images/icons/arrow-left.svg';
import { LocationBanner } from '../../../LocationBanner/LocationBanner';
import { SocialMediaLinks } from '../../../SocialMediaLinks/SocialMediaLinks';
import { ButtonStandart } from 'components/Buttons/ButtonStandart/ButtonStandart';
import {
  RoomName,
  DataBlock,
  HeroWrapper,
  DescriptionText,
  HeroLocationBanner,
  HeroBtnsWrapper,
  HeroSocialMediaLinksWrapper,
  SliderWrapper,
  HeaderLayout,
  TextWrapper,
  CustomSliderBtn,
} from './Hero.styled';
import { HeroSlider } from 'components/Swiper/HeroSwiper';
import { triple } from '../../../../utils/roomsImages';

export const Hero = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <HeroWrapper>
      <HeaderLayout />
      <SliderWrapper>
        <HeroSlider images={triple} refLink={sliderRef} />
      </SliderWrapper>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        zIndex="-1"
      >
        <DataBlock>
          <TextWrapper>
            <RoomName>ТРЬОХМІСНИЙ НОМЕР</RoomName>
            <DescriptionText>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </DescriptionText>
            <HeroLocationBanner>
              <LocationBanner />
            </HeroLocationBanner>
          </TextWrapper>

          <HeroSocialMediaLinksWrapper>
            <SocialMediaLinks location="header" />
          </HeroSocialMediaLinksWrapper>

          <HeroBtnsWrapper>
            <ButtonStandart text="Переглянути ціни"></ButtonStandart>
          </HeroBtnsWrapper>
        </DataBlock>
      </Box>
      <CustomSliderBtn type="button" position="right" onClick={handlePrev}>
        <ReactSVG src={ArrowLeft} />
      </CustomSliderBtn>
      <CustomSliderBtn type="button" position="left" onClick={handleNext}>
        <ReactSVG src={ArrowRight} />
      </CustomSliderBtn>
    </HeroWrapper>
  );
};
