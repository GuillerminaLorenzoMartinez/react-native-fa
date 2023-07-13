import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AwardsAndOutputsScreen from "./AwardsAndOuputsScreen";
import AwardDetailScreen from "./AwardDetailScreen";
import OutputDetailScreen from "./OutputDetailScreen";

const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Stack.Navigator initialRouteName="AwardsAndOutputsScreen">
      <Stack.Screen
        name="AwardsAndOutputsScreen"
        component={AwardsAndOutputsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AwardDetailScreen"
        component={AwardDetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OutputDetailScreen"
        component={OutputDetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Home;
