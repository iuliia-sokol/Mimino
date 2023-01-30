import { ButtonModal } from 'components/Buttons/ButtonModal/ButtonModal';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { PatternFormat } from 'react-number-format';
import { DatePickerComponent } from './DatePickerComponent/DatePickerComponent';

// import Notiflix from 'notiflix';
// import PropTypes from 'prop-types';

import {
  FormTitle,
  InputsWrapper,
  Input,
  InputWrapper,
  ModalWrapper,
  ModalForm,
  InputBlocksWrapper,
  Hint,
  BtnsWrapper,
} from './ModalFormTable.styled';
import { CustomSelect } from 'components/Select/CustomSelect';
import { options } from 'utils/personsOptions';

// import { useDispatch, useSelector } from 'react-redux';
// import { updateContact } from 'redux/contactsOperations';
// import { getContactsItems } from 'redux/contactsSelectors';

export const ModalFormTable = ({ closeModal }) => {
  // const contacts = useSelector(getContactsItems);
  // const currentContact = contacts.find(contact => contact.id === id);

  // const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [persons, setPersons] = useState('');
  const [date, setDate] = useState(null);

  const onInputChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      case 'persons':
        setPersons(event.target.value);
        break;
      case 'date':
        setDate(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    // const includesName = contacts.find(
    //   contact => contact.name === name && contact.number === number
    // );

    // if (includesName) {
    //   return Notiflix.Notify.warning('No data changed', notifySettings);
    // }
    // dispatch(updateContact({ id, name, number }));
    console.log({ name, number, date, persons });
    closeModal();
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
    setDate('');
    setPersons('');
  };

  return (
    <ModalWrapper>
      <FormTitle>ЗАБРОНЮВАТИ СТОЛИК</FormTitle>
      <ModalForm onSubmit={handleSubmit}>
        <InputBlocksWrapper>
          <InputsWrapper>
            <InputWrapper>
              <Input
                required
                onChange={onInputChange}
                value={name}
                name="name"
                placeholder="Ваше ім’я"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              />
              <Hint>На кого забронювати столик?</Hint>
            </InputWrapper>
            <InputWrapper>
              <PatternFormat
                name="number"
                customInput={Input}
                type="tel"
                placeholder="+38 (___) ___-__-__"
                format="+38 (###) ###-####"
                mask="_"
                value={number}
                onValueChange={value => setNumber(value.formattedValue)}
                required
              />
              <Hint>Номер телефону</Hint>
            </InputWrapper>
          </InputsWrapper>
          <InputsWrapper>
            <InputWrapper>
              <CustomSelect
                value={persons}
                options={options}
                placeholder="Оберіть кількість гостей"
                onChange={selectedOption => setPersons(selectedOption)}
              />

              <Hint>Столик на яку кількість осіб?</Hint>
            </InputWrapper>
            <InputWrapper>
              <DatePickerComponent
                name="date"
                date={date}
                handler={date => setDate(date)}
              />
              <Hint>На яку дату бронювати?</Hint>
            </InputWrapper>
          </InputsWrapper>
        </InputBlocksWrapper>
        <BtnsWrapper>
          <ButtonModal type="submit" text="ОФОРМИТИ БРОНЮВАННЯ" />
        </BtnsWrapper>
      </ModalForm>
    </ModalWrapper>
  );
};

ModalFormTable.propTypes = {
  // id: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
