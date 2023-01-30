import { ButtonModal } from 'components/Buttons/ButtonModal/ButtonModal';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  FormTitle,
  InputsWrapper,
  InputWrapper,
  ModalWrapper,
  ModalForm,
  InputBlocksWrapper,
  Hint,
  BtnsWrapper,
} from './ModalFormRoom.styled';
import { CustomSelect } from 'components/Select/CustomSelect';

import { ModalConfirmation } from './ModalConfirmation';
import { options } from 'utils/personsOptions';
import { optionsRooms } from 'utils/optionsRooms';
import { Input } from './ModalFormPrice.styled';

// import { useDispatch, useSelector } from 'react-redux';

export const ModalFormPrice = ({ closeModal }) => {
  // const dispatch = useDispatch();
  const [price, setPrice] = useState('');
  const [nights, setNights] = useState('');
  const [category, setCategory] = useState('');

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
      case 'price':
        setPrice(event.target.value);
        break;
      case 'nights':
        setNights(event.target.value);
        break;
      case 'category':
        setCategory(event.target.value);
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
  //   setPrice('');
  //   setNumber('');
  //   setCategory('');
  // };

  useEffect(() => {
    setIsValid(price && nights && category ? true : false);
  }, [price, nights, category]);

  return (
    <>
      {!showModal ? (
        <ModalWrapper>
          <FormTitle>ЦІНИ НА НОМЕР</FormTitle>
          <ModalForm onSubmit={handleSubmit}>
            <InputBlocksWrapper>
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
                  <CustomSelect
                    name="nights"
                    value={nights}
                    options={options}
                    placeholder="Кількість ночей"
                    onChange={selectedOption => setNights(selectedOption)}
                  />
                  <Hint>Кількість ночей</Hint>
                </InputWrapper>
                <InputWrapper>
                  <Input
                    onChange={onInputChange}
                    value={price}
                    name="price"
                    // placeholder="Ваше ім’я"
                    // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  />
                  <Hint>На кого забронювати номер?</Hint>
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
          status="price"
          price={price}
          nights={nights}
          category={category}
        />
      )}
    </>
  );
};

ModalFormPrice.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
