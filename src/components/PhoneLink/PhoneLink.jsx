import { VscDeviceMobile } from 'react-icons/vsc';
import {
  LinkWrapper,
  LinkText,
  LinkPhoneWrapper,
  Phone,
} from './PhoneLink.styled';

export const PhoneLink = ({
  to,
  href,
  abonent,
  number,
  number2,
  textColor = 'light',
  linkLocation,
}) => {
  return (
    <LinkWrapper href={href} linkLocation={linkLocation}>
      <LinkText to={to} linkLocation={linkLocation}>
        {abonent}
      </LinkText>
      <LinkPhoneWrapper linkLocation={linkLocation}>
        <Phone href={href} linkLocation={linkLocation} textColor={textColor}>
          <VscDeviceMobile />
          <span>{number}</span>
        </Phone>
        {number2 && (
          <Phone textColor={textColor}>
            <span>{number2}</span>
          </Phone>
        )}
      </LinkPhoneWrapper>
    </LinkWrapper>
  );
};
