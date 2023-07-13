import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./HomeScreen";
import AwardDetailScreen from "./AwardDetail";

const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AwardDetailScreen"
        component={AwardDetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Home;
