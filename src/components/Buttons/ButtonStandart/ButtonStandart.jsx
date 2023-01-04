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

// Btn.propTypes = {
//   text: PropTypes.string.isRequired,
//   icon: PropTypes.any,
//   disabled: PropTypes.bool,
//   type: PropTypes.string,
//   status: PropTypes.string,
//   onClick: PropTypes.func,
// };
