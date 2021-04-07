import React from "react";
import { RouteProp } from "@react-navigation/native";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";

import ReservationCardComponent from "../components/ReservationCardComponent";
import SafeArea from "../../../ui/components/utility/SafeAreaBase";
import { sortReservationsByDate } from "../../../store/reservations/reservationsSelectors";
import { IReservations } from "../../../store/reservations/reservationsTypes";

export type ReservationsStackParamList = {
  Rooms: undefined;
  ReservationList: { name: string };
  AddReservation: undefined;
};

type ProfileScreenRouteProp = RouteProp<
  ReservationsStackParamList,
  "ReservationList"
>;

type Props = {
  route: ProfileScreenRouteProp;
};

interface FlatListProps {
  item: IReservations;
}

const ReservationScreen = ({ route }: Props): JSX.Element => {
  const sortedReservations = useSelector(sortReservationsByDate);
  const { name } = route.params;

  const filteredReservationsByRoom = (n: string): IReservations[] =>
    sortedReservations.filter((arr) => arr.room.name === n);

  const renderItem = ({ item }: FlatListProps): JSX.Element => (
    <ReservationCardComponent reservation={item} />
  );
  return (
    <SafeArea>
      <FlatList
        data={filteredReservationsByRoom(name)}
        renderItem={renderItem}
        keyExtractor={(item) => item.start}
      />
    </SafeArea>
  );
};

export default ReservationScreen;
