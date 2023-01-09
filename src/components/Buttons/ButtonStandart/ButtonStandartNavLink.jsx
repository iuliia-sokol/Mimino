import { BtnElementNavLink } from './ButtonStandart.styled';

export const ButtonStandartNavLink = ({ text, icon: Icon = null, to }) => {
  return (
    <BtnElementNavLink to={to}>
      {Icon && <Icon></Icon>}
      {text}
    </BtnElementNavLink>
  );
};
