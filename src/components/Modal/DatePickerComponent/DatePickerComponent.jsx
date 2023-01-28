import ReactDatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Label, Wrapper } from './DatePickerComponent.styled';
import { uk } from 'date-fns/locale';

registerLocale('uk', uk);

export function DatePickerComponent({ date, handler }) {
  return (
    <>
      <Label>
        <Wrapper>
          <ReactDatePicker
            className="date"
            name="date"
            dateFormat="dd.MM.yyyy"
            selected={date ? date : null}
            minDate={new Date()}
            onChange={handler}
            shouldCloseOnSelect={true}
            locale={'uk'}
            placeholderText="Сьогодні"
            popperPlacement="auto"
            fixedHeight
            todayButton="Сьогодні"
            closeOnScroll={true}
          />
        </Wrapper>
      </Label>
    </>
  );
}
