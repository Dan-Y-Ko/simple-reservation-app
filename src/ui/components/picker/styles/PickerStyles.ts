import styled from "styled-components/native";
import { Picker } from "@react-native-community/picker";
import { View } from "react-native";

import Text from "../../typography/TextComponent";

export const LabelTextWrapper = styled(View)`
  align-items: center;
`;

export const LabelText = styled(Text)`
  margin-top: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const PickerWrapper = styled(View)`
  align-items: center;
`;

export const PickerStyled = styled(Picker)`
  height: 100px;
  width: 120px;
  justify-content: center;
`;
