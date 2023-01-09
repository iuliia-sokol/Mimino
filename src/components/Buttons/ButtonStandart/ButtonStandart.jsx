import { BtnElement } from './ButtonStandart.styled';

export const ButtonStandart = ({
  text,
  icon: Icon = null,
  disabled = false,
  type = 'button',
  onClick = null,
}) => {
  return (
    <BtnElement type={type} disabled={disabled} onClick={onClick}>
      {Icon && <Icon></Icon>}
      {text}
    </BtnElement>
  );
};
