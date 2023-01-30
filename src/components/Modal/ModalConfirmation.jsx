// import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';

import { ButtonModal } from 'components/Buttons/ButtonModal/ButtonModal';
import {
  ListItem,
  ContentWrapper,
  ConfirmationText,
  TextWrapper,
  Hint,
} from './ModalConfirmation.styled';

// import { Btn } from 'components/Btn/Btn';
// import { deleteContact } from 'redux/contactsOperations';

export const ModalConfirmation = ({
  closeModal,
  name,
  number,
  date,
  persons,
}) => {
  // const dispatch = useDispatch();
  function convert(str) {
    var date = new Date(str),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2);
    return [day, mnth, date.getFullYear()].join('.');
  }

  return (
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
  );
};

// ModalDeleteConfirmation.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   closeModal: PropTypes.func.isRequired,
// };
