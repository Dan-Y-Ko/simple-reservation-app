import React from "react";
import styled from "styled-components/native";
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ReservationsNavigator from "./ReservationsNavigator";
import colors from "../../ui/theme/colors";

type BottomStackParamList = {
  Reservations: undefined;
};

interface ITabBarProps {
  size: number;
}

export const BottomTabIcons = styled(MaterialCommunityIcons).attrs({
  color: colors.brand.primary,
})``;

const Tab = createBottomTabNavigator<BottomStackParamList>();

const TAB_ICON: Record<string, any> = {
  Reservations: "calendar-check",
};

const createScreenOptions = ({
  route,
}: BottomTabScreenProps<ParamListBase>): BottomTabNavigationOptions => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size }: ITabBarProps) => (
      <BottomTabIcons name={iconName} size={size} />
    ),
  };
};

const AppNavigator = (): JSX.Element => (
  <Tab.Navigator
    screenOptions={createScreenOptions}
    initialRouteName="Reservations"
    tabBarOptions={{
      activeTintColor: "teal",
      inactiveTintColor: "gray",
      labelPosition: "below-icon",
    }}
  >
    <Tab.Screen name="Reservations" component={ReservationsNavigator} />
  </Tab.Navigator>
);

export default AppNavigator;
