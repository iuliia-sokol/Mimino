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
  linklocation,
}) => {
  return (
    <LinkWrapper href={href} linklocation={linklocation}>
      <LinkText to={to} linklocation={linklocation}>
        {abonent}
      </LinkText>
      <LinkPhoneWrapper linklocation={linklocation}>
        <Phone href={href} linklocation={linklocation} textColor={textColor}>
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
