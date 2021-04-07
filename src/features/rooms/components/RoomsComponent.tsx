import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  RoomCard,
  RoomCardText,
  RoomCardCover,
  ButtonWrapper,
  ViewReservationButton,
} from "./styles/RoomsComponentStyles";

interface RoomsComponentProps {
  name: string;
  image: string;
}

const RoomsComponent = ({ name, image }: RoomsComponentProps): JSX.Element => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("ReservationList", { name });
  };

  return (
    <RoomCard elevation={5}>
      <RoomCardText title={name} />
      <RoomCardCover source={{ uri: image }} />
      <ButtonWrapper>
        <ViewReservationButton mode="contained" onPress={handlePress}>
          View Reservations
        </ViewReservationButton>
      </ButtonWrapper>
    </RoomCard>
  );
};

export default RoomsComponent;
