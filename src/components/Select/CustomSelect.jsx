import { CustomSelectStyled } from './CustomSelect.styled';

export const CustomSelect = ({ options, placeholder, onChange, value }) => {
  return (
    <CustomSelectStyled
      classNamePrefix="react-select"
      defaultOptions
      placeholder={placeholder}
      options={options}
      closeMenuOnSelect={true}
      onChange={onChange}
      value={value}
      autoFocus={false}
      required={true}
    />
  );
};
