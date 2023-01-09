import { BtnElementLink } from './ButtonStandart.styled';

export const ButtonStandartLink = ({ text, icon: Icon = null, href }) => {
  return (
    <BtnElementLink href={href}>
      {Icon && <Icon></Icon>}
      {text}
    </BtnElementLink>
  );
};
