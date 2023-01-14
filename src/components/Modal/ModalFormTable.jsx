import { ButtonLarge } from 'components/Buttons/ButtonLarge/ButtonLarge';
import { useState } from 'react';

// import Notiflix from 'notiflix';
// import PropTypes from 'prop-types';

import {
  InputsWrapper,
  Input,
  InputWrapper,
  ModalWrapper,
  ModalForm,
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
  const [date, setDate] = useState('');

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
      <ModalForm onSubmit={handleSubmit}>
        <InputsWrapper>
          <InputWrapper>
            <Input
              onChange={onInputChange}
              value={name}
              name="name"
              placeholder="Ваше ім’я"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            />
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
          </InputWrapper>
          <InputWrapper></InputWrapper>
          <InputWrapper></InputWrapper>
        </InputsWrapper>
        <ButtonLarge type="submit" status="update" text="Update contact" />
      </ModalForm>
    </ModalWrapper>
  );
};

// ModalForm.propTypes = {
//   id: PropTypes.string.isRequired,
//   closeModal: PropTypes.func.isRequired,
// };
