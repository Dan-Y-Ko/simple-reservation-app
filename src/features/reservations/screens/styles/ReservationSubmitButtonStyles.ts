import styled from "styled-components/native";
import { View } from "react-native";

import ButtonComponent from "../../../../ui/components/button/ButtonComponent";

export const AddReservationButtonWrapper = styled(View)`
  align-items: center;
  margin-top: ${(props) => props.theme.space[3]};
`;

export const AddReservationButton = styled(ButtonComponent)`
  width: 90%;
`;
