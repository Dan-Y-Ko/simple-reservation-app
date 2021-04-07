import React from "react";
import styled from "styled-components/native";
import {
  createStackNavigator,
  StackCardInterpolationProps,
} from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import colors from "../../ui/theme/colors";
import RoomsScreen from "../rooms/screens/RoomsScreen";
import AddReservationScreen from "../reservations/screens/AddReservationScreen";
import ReservationScreen, {
  ReservationsStackParamList,
} from "../reservations/screens/ReservationScreen";

const forFade = ({ current }: StackCardInterpolationProps) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export const BottomTabIcons = styled(Ionicons).attrs({
  color: colors.brand.primary,
})`
  margin-right: ${(props) => props.theme.space[2]};
`;

const HeaderRightButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("AddReservation");
      }}
    >
      <BottomTabIcons name="md-add-circle-outline" size={24} />
    </TouchableOpacity>
  );
};

const ReservationsStack = createStackNavigator<ReservationsStackParamList>();

const ReservationsNavigator = (): JSX.Element => (
  <ReservationsStack.Navigator>
    <ReservationsStack.Screen name="Rooms" component={RoomsScreen} />
    <ReservationsStack.Screen
      name="ReservationList"
      component={ReservationScreen}
      options={{
        title: "Reservations",
        gestureEnabled: false,
        cardStyleInterpolator: forFade,
        headerRight: HeaderRightButton,
      }}
    />
    <ReservationsStack.Screen
      name="AddReservation"
      component={AddReservationScreen}
      options={{
        title: "Add a Reservation",
      }}
    />
  </ReservationsStack.Navigator>
);

export default ReservationsNavigator;
