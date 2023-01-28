import { ButtonModal } from 'components/Buttons/ButtonModal/ButtonModal';
import { useState } from 'react';
import { DatePickerComponent } from './DatePickerComponent/DatePickerComponent';

// import Notiflix from 'notiflix';
// import PropTypes from 'prop-types';

import {
  FormTitle,
  InputsWrapper,
  Input,
  InputSelect,
  InputWrapper,
  ModalWrapper,
  ModalForm,
  InputBlocksWrapper,
  Hint,
  BtnsWrapper,
} from './ModalFormTable.styled';

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
  const [date, setDate] = useState(new Date());

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
                onChange={onInputChange}
                value={name}
                name="name"
                placeholder="Ваше ім’я"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              />
              <Hint>На кого забронювати столик?</Hint>
            </InputWrapper>
            <InputWrapper>
              <Input
                onChange={onInputChange}
                value={number}
                type="tel"
                name="number"
                placeholder="+38 (___) ___-__-__"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              />
              <Hint>Номер телефону</Hint>
            </InputWrapper>
          </InputsWrapper>
          <InputsWrapper>
            <InputWrapper>
              <InputSelect
                onChange={onInputChange}
                value={persons}
                name="persons"
                placeholder="+38 (___) ___-__-__"
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="3">4</option>
              </InputSelect>
              <Hint>Столик на яку кількість осіб?</Hint>
            </InputWrapper>
            <InputWrapper>
              <DatePickerComponent
                name="date"
                date={date}
                value={date}
                placeholder="Сьогодні"
                // maxDate={today}
                handler={date => setDate(date)}
              />
              {/* <Input
                onChange={onInputChange}
                value={date}
                type="date"
                name="date"
                placeholder="Сьогодні"
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              /> */}
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

// ModalForm.propTypes = {
//   id: PropTypes.string.isRequired,
//   closeModal: PropTypes.func.isRequired,
// };
