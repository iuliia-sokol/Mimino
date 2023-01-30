import { ButtonModal } from 'components/Buttons/ButtonModal/ButtonModal';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { PatternFormat } from 'react-number-format';
import { DatePickerComponent } from './DatePickerComponent/DatePickerComponent';

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

import { ModalConfirmation } from './ModalConfirmation';

// import { useDispatch, useSelector } from 'react-redux';

export const ModalFormTable = ({ closeModal }) => {
  // const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [persons, setPersons] = useState('');
  const [date, setDate] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleConfirmModal = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      closeModal();
    }, 7000);
  };

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
    // console.log({ name, number, date, persons });
    // closeModal();
    // resetForm();
    toggleConfirmModal();
  };

  // const resetForm = () => {
  //   setName('');
  //   setNumber('');
  //   setDate('');
  //   setPersons('');
  // };

  useEffect(() => {
    setIsValid(name && number && date && persons ? true : false);
  }, [date, name, number, persons]);

  return (
    <>
      {!showModal ? (
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
                  <PatternFormat
                    name="number"
                    customInput={Input}
                    type="tel"
                    placeholder="+38 (___) ___-__-__"
                    format="+38 (###) ###-####"
                    mask="_"
                    value={number}
                    onValueChange={value => setNumber(value.formattedValue)}
                  />
                  <Hint>Номер телефону</Hint>
                </InputWrapper>
              </InputsWrapper>
              <InputsWrapper>
                <InputWrapper>
                  <CustomSelect
                    value={persons}
                    options={options}
                    placeholder="Кількість гостей"
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
              <ButtonModal
                disabled={!isValid}
                type="submit"
                text="ОФОРМИТИ БРОНЮВАННЯ"
              />
            </BtnsWrapper>
          </ModalForm>
        </ModalWrapper>
      ) : (
        <ModalConfirmation
          closeModal={closeModal}
          name={name}
          number={number}
          date={date}
          persons={persons}
        />
      )}
    </>
  );
};

ModalFormTable.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
