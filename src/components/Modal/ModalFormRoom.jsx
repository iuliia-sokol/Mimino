import { ButtonModal } from 'components/Buttons/ButtonModal/ButtonModal';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { PatternFormat } from 'react-number-format';
import { DatePickerComponent } from '../DatePickerComponent/DatePickerComponent';

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
} from './ModalFormRoom.styled';
import { CustomSelect } from 'components/Select/CustomSelect';

import { ModalConfirmation } from './ModalConfirmation';
import { optionsRooms } from 'utils/optionsRooms';

// import { useDispatch, useSelector } from 'react-redux';

export const ModalFormRoom = ({ closeModal }) => {
  // const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [category, setCategory] = useState('');
  const [inDate, setInDate] = useState(null);
  const [outDate, setOutDate] = useState(null);
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
      case 'category':
        setCategory(event.target.value);
        break;
      case 'inDate':
        setInDate(event.target.value);
        break;
      case 'outDate':
        setOutDate(event.target.value);
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
  //   setInDate('');
  //   setOutDate('');
  //   setCategory('');
  // };

  useEffect(() => {
    setIsValid(name && number && inDate && outDate && category ? true : false);
  }, [inDate, outDate, name, number, category]);

  return (
    <>
      {!showModal ? (
        <ModalWrapper>
          <FormTitle>ЗАБРОНЮВАТИ НОМЕР</FormTitle>
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
                  <Hint>На кого забронювати номер?</Hint>
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
                    name="category"
                    value={category}
                    options={optionsRooms}
                    placeholder="Категорія номеру"
                    onChange={selectedOption => setCategory(selectedOption)}
                  />
                  <Hint>Категорія номеру</Hint>
                </InputWrapper>
              </InputsWrapper>

              <InputsWrapper>
                <InputWrapper>
                  <DatePickerComponent
                    name="inDate"
                    date={inDate}
                    handler={date => setInDate(date)}
                  />
                  <Hint>Дата заїзду</Hint>
                </InputWrapper>
                <InputWrapper>
                  <DatePickerComponent
                    name="outDate"
                    date={outDate}
                    handler={date => setOutDate(date)}
                  />
                  <Hint>Дата виїзду</Hint>
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
          status="room"
          name={name}
          number={number}
          inDate={inDate}
          outDate={outDate}
          category={category}
        />
      )}
    </>
  );
};

ModalFormRoom.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
