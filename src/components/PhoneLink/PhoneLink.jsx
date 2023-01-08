import { VscDeviceMobile } from 'react-icons/vsc';
import { Link, LinkText, LinkPhoneWrapper, Phone } from './PhoneLink.styled';

export const PhoneLink = ({
  href,
  abonent,
  number,
  number2,
  textColor = 'light',
  linkLocation,
}) => {
  return (
    <Link href={href}>
      <LinkText>{abonent}</LinkText>
      <LinkPhoneWrapper linkLocation={linkLocation}>
        <VscDeviceMobile />
        <Phone linkLocation={linkLocation} textColor={textColor}>
          {number}{' '}
        </Phone>
        {number2 && <Phone textColor={textColor}>{number2} </Phone>}
      </LinkPhoneWrapper>
    </Link>
  );
};
