import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AwardsAndOutputsScreen from "../screens/AwardsAndOuputs";
import AwardDetail from "../screens/AwardDetail";
import OutputDetail from "../screens/OutputDetail";
import { ParamList } from "../utils/types";

const Stack = createNativeStackNavigator();

function AwardsAndOutputs() {
  return (
    <Stack.Navigator initialRouteName="AwardsAndOutputsScreen">
      <Stack.Screen
        name="AwardsAndOutputsScreen"
        component={AwardsAndOutputsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AwardDetail"
        component={AwardDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OutputDetail"
        component={OutputDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AwardsAndOutputs;
