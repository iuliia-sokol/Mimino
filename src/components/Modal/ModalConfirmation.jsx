// import { useDispatch } from 'react-redux';

import { ButtonModal } from 'components/Buttons/ButtonModal/ButtonModal';
import { useEffect, useState } from 'react';
import { PatternFormat } from 'react-number-format';
import {
  ContentWrapper,
  ConfirmationText,
  TextWrapper,
  Hint,
} from './ModalConfirmation.styled';
import { Input, InputWrapper } from './ModalFormPrice.styled';

export const ModalConfirmation = ({
  closeModal,
  name,
  date,
  persons,
  category,
  inDate,
  outDate,
  status,
  price,
  nights,
}) => {
  // const dispatch = useDispatch();
  function convert(str) {
    var date = new Date(str),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2);
    return [day, mnth, date.getFullYear()].join('.');
  }

  const [number, setNumber] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(number ? true : false);
  }, [number]);
  return (
    <>
      {status === 'table' && (
        <ContentWrapper>
          <TextWrapper>
            <ConfirmationText>
              <span>
                Дякуємо, <span>{name}</span> !
              </span>
            </ConfirmationText>
            <ConfirmationText>
              Деталі бронювання: <br />
              Кількість осіб: <span>{persons.value} </span>
              <br />
              Бажана дата: <span>{convert(date.toString())}</span>
            </ConfirmationText>
            <Hint>
              Незабаром з Вами зв'яжеться менеджер для підтвердження бронювання!
            </Hint>
            <ButtonModal
              type="button"
              text="Ок"
              onClick={() => {
                // dispatch(deleteContact(id));
                closeModal();
              }}
            />
          </TextWrapper>
        </ContentWrapper>
      )}
      {status === 'room' && (
        <ContentWrapper>
          <TextWrapper>
            <ConfirmationText>
              <span>
                Дякуємо, <span>{name}</span> !
              </span>
            </ConfirmationText>
            <ConfirmationText>
              Деталі бронювання: <br />
              Категорія номеру: <span>{category.label} </span>
              <br />
              Дата заїзду: <span>{convert(inDate.toString())}</span>
              <br />
              Дата виїзду: <span>{convert(outDate.toString())}</span>
            </ConfirmationText>
            <Hint>
              Незабаром з Вами зв'яжеться менеджер для підтвердження бронювання!
            </Hint>
            <ButtonModal
              type="button"
              text="Добре"
              onClick={() => {
                // dispatch(deleteContact(id));
                closeModal();
              }}
            />
          </TextWrapper>
        </ContentWrapper>
      )}
      {status === 'price' && (
        <ContentWrapper>
          <TextWrapper>
            <ConfirmationText>
              <span>Ви бажаєте забронювати:</span>
            </ConfirmationText>
            <ConfirmationText>
              Категорія номеру: <span>{category.label} </span>
              <br />
              Кількість ночей: <span>{nights.value}</span>
              <br />
              Загальна сума: <span>{price}</span> грн
            </ConfirmationText>
            <Hint>
              Вкажіть Ваш номер телефону, щоб з Вами міг зв'язатись менеджер для
              підтвердження бронювання:
            </Hint>
            <InputWrapper>
              <PatternFormat
                name="number"
                required
                customInput={Input}
                type="tel"
                placeholder="+38 (___) ___-__-__"
                format="+38 (###) ###-####"
                mask="_"
                value={number}
                onValueChange={value => setNumber(value.formattedValue)}
              />
            </InputWrapper>
            <ButtonModal
              disabled={!isValid}
              type="submit"
              text="Підтвердити"
              onClick={() => {
                // dispatch();
                // console.log(number);
                closeModal();
              }}
            />
          </TextWrapper>
        </ContentWrapper>
      )}
    </>
  );
};
