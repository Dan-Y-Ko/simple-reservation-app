import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import SafeArea from "../../../ui/components/utility/SafeAreaBase";
import DateTimePickerComponent from "../../../ui/components/dateTimePicker/DateTimePickerComponent";
import PickerComponent from "../../../ui/components/picker/PickerComponent";
import { ReservationActionTypes } from "../../../store/reservations/reservationsTypes";
import {
  AddReservationButtonWrapper,
  AddReservationButton,
} from "./styles/ReservationSubmitButtonStyles";

const AddReservationScreen = () => {
  const [start, setStart] = useState<Date | undefined>(new Date());
  const [end, setEnd] = useState<Date | undefined>(new Date());
  const [room, setRoom] = useState<string>();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const roomList = [
    { label: "Room A", value: "Room A" },
    { label: "Room B", value: "Room B" },
  ];

  const onStartDateTimeChange = (event: any, selectedDate: Date) => {
    const currentDate = selectedDate || start;
    setStart(currentDate);
  };

  const onEndDateTimeChange = (event: any, selectedDate: Date) => {
    const currentDate = selectedDate || end;
    setEnd(currentDate);
  };

  const onPickerChange = (itemValue: string) => setRoom(itemValue);

  const handleSubmit = () => {
    let roomObj;

    if (room === "Room A") {
      roomObj = {
        id: "401662b9-b110-4159-a4f2-ebd955f3b1f4",
        name: "Room A",
        imageUrl:
          "https://staging.cove.is/parse/files/hRKEvW2lN74k5nCg6p2XtmiWRNHycE2pHpXpELMX/f96efd3f11aadb34135bb1f0aecf9667_Quincy%20Room.jpg",
      };
    } else if (room === "Room B") {
      roomObj = {
        id: "70866847-3a55-407e-9973-841ac4c16a29",
        name: "Room B",
        imageUrl:
          "https://staging.cove.is/parse/files/hRKEvW2lN74k5nCg6p2XtmiWRNHycE2pHpXpELMX/d0d19da4aa88734291279f5fe7a836e7_Wakefield%20Room.jpg",
      };
    }

    const payload = {
      start,
      end,
      room: roomObj,
    };

    dispatch({
      type: ReservationActionTypes.ADD_RESERVATIONS_SUCCESS,
      payload,
    });

    navigation.navigate("Rooms");
  };
  return (
    <SafeArea>
      <DateTimePickerComponent
        show
        labelText="Select Start Time"
        date={start!}
        mode="datetime"
        onChange={onStartDateTimeChange}
      />
      <DateTimePickerComponent
        show
        labelText="Select End Time"
        date={end!}
        mode="datetime"
        onChange={onEndDateTimeChange}
      />
      <PickerComponent
        labelText="Select a Room"
        value={room}
        onPickerChange={onPickerChange}
        list={roomList}
      />
      <AddReservationButtonWrapper>
        <AddReservationButton mode="contained" onPress={handleSubmit}>
          Add Reservation
        </AddReservationButton>
      </AddReservationButtonWrapper>
    </SafeArea>
  );
};

export default AddReservationScreen;
