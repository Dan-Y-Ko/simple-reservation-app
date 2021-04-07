import styled from "styled-components/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { View } from "react-native";

import Text from "../../typography/TextComponent";

export const LabelTextWrapper = styled(View)`
  align-items: center;
`;

export const LabelText = styled(Text)`
  margin-top: ${(props) => props.theme.space[3]};
`;

export const DateTimePickerStyled = styled(DateTimePicker)`
  height: ${(props) => props.theme.sizes[3]};
  margin-left: 80px;
`;
