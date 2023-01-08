import { MdLocationOn } from 'react-icons/md';
import {
  LocationText,
  LocationIconWrapper,
  LocationWrapper,
} from './LocationBanner.styled';

export const LocationBanner = ({ background }) => {
  return (
    <LocationWrapper background={background}>
      <LocationIconWrapper>
        <MdLocationOn />
      </LocationIconWrapper>
      <LocationText background={background}>
        Україна, м. Полтава, <br />
        вул. Маршала Бірюзова, 15
      </LocationText>
    </LocationWrapper>
  );
};
