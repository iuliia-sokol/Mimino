import ReactDatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Label, Wrapper } from './DatePickerComponent.styled';
import { uk } from 'date-fns/locale';

registerLocale('uk', uk);

export function DatePickerComponent({ date, handler }) {
  function add_months(dt, n) {
    return new Date(dt.setMonth(dt.getMonth() + n));
  }
  const now = Date.now();

  const today = new Date();
  const maxDate = add_months(today, 2);

  return (
    <>
      <Label>
        <Wrapper>
          <ReactDatePicker
            required
            className="date"
            name="date"
            dateFormat="dd.MM.yyyy"
            selected={date ? date : null}
            minDate={now}
            maxDate={maxDate}
            onChange={handler}
            shouldCloseOnSelect={true}
            locale={'uk'}
            placeholderText="Сьогодні"
            popperPlacement="auto"
            todayButton="Сьогодні"
          />
        </Wrapper>
      </Label>
    </>
  );
}
