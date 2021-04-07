import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./AppNavigator";

// create container navigation in case app needs authentication or onboarding before proceeding to main app
const RootStack = (): JSX.Element => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);

export default RootStack;
