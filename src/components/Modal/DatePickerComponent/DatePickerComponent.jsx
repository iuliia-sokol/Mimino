import ReactDatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Label, Wrapper } from './DatePickerComponent.styled';
import { uk } from 'date-fns/locale';

registerLocale('uk', uk);

export function DatePickerComponent({ date, maxDate, handler }) {
  return (
    <>
      <Label>
        <Wrapper>
          <ReactDatePicker
            className="date"
            name="date"
            dateFormat="dd.MM.yyyy"
            selected={date}
            // minDate={date}
            onChange={handler}
            shouldCloseOnSelect={true}
            locale={'uk'}
          />
        </Wrapper>
      </Label>
    </>
  );
}
