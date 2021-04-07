import React from "react";
import { Picker } from "@react-native-community/picker";

import {
  LabelTextWrapper,
  LabelText,
  PickerWrapper,
  PickerStyled,
} from "./styles/PickerStyles";

interface ListItem {
  label: string;
  value: string;
}

const PickerComponent = ({ labelText, value, onPickerChange, list }: any) => {
  const renderPickerItem = () =>
    list.map((g: ListItem) => (
      <Picker.Item label={g.label} value={g.value} key={g.label} />
    ));

  return (
    <>
      <LabelTextWrapper>
        <LabelText variant="label">{labelText}</LabelText>
      </LabelTextWrapper>
      <PickerWrapper>
        <PickerStyled selectedValue={value} onValueChange={onPickerChange}>
          {renderPickerItem()}
        </PickerStyled>
      </PickerWrapper>
    </>
  );
};

export default PickerComponent;
