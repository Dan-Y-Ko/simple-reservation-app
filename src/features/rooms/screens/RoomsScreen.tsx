import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";

import SafeArea from "../../../ui/components/utility/SafeAreaBase";
import RoomsComponent from "../components/RoomsComponent";
import RoomCardContainer from "./styles/RoomsScreenStyles";
import FadeInAnimationView from "../../../ui/components/animations/FadeInAnimationView";
import { selecUniqueRooms } from "../../../store/reservations/reservationsSelectors";
import { ReservationActionTypes } from "../../../store/reservations/reservationsTypes";

const RoomsScreen = (): JSX.Element => {
  const rooms = useSelector(selecUniqueRooms);
  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      dispatch({ type: ReservationActionTypes.LOAD_RESERVATIONS_START });
    }, [dispatch])
  );

  return (
    <SafeArea>
      <RoomCardContainer>
        {rooms &&
          rooms.map((room) => (
            <FadeInAnimationView key={room.id}>
              <RoomsComponent name={room.name} image={room.imageUrl} />
            </FadeInAnimationView>
          ))}
      </RoomCardContainer>
    </SafeArea>
  );
};

export default RoomsScreen;
