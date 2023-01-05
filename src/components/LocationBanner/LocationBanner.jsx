import { MdLocationOn } from 'react-icons/md';
import {
  LocationText,
  LocationIconWrapper,
  LocationWrapper,
} from './LocationBanner.styled';
export const LocationBanner = () => {
  return (
    <LocationWrapper>
      <LocationIconWrapper>
        <MdLocationOn />
      </LocationIconWrapper>
      <LocationText>
        Україна, м. Полтава, <br />
        вул. Маршала Бірюзова, 15
      </LocationText>
    </LocationWrapper>
  );
};
