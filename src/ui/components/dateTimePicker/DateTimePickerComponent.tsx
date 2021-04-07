import React from "react";

import {
  LabelTextWrapper,
  LabelText,
  DateTimePickerStyled,
} from "./styles/DateTimePickerStyles";

const DateTimePickerComponent = ({ labelText, date, mode, onChange }: any) => (
  <>
    <LabelTextWrapper>
      <LabelText variant="label">{labelText}</LabelText>
    </LabelTextWrapper>
    <DateTimePickerStyled
      testID="dateTimePicker"
      value={date}
      mode={mode}
      display="default"
      onChange={onChange}
    />
  </>
);

export default DateTimePickerComponent;
