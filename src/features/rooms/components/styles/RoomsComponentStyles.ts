import styled from "styled-components/native";
import { View } from "react-native";
import { Card } from "react-native-paper";

import ButtonComponent from "../../../../ui/components/button/ButtonComponent";
import { fonts } from "../../../../ui/theme/fonts";

export const RoomCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.sizes[0]};
`;

export const RoomCardCover = styled(Card.Cover)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-bottom-left-radius: ${(props) => props.theme.sizes[0]};
  border-bottom-right-radius: ${(props) => props.theme.sizes[0]};
`;

export const RoomCardText = styled(Card.Title).attrs({
  titleStyle: { fontFamily: fonts.heading, textAlign: "center" },
})``;

export const ButtonWrapper = styled(View)`
  position: relative;
  align-items: center;
`;

export const ViewReservationButton = styled(ButtonComponent)`
  position: absolute;
  width: 90%;
  bottom: 10px;
`;
