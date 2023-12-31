import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/Home";
import AwardDetail from "../screens/AwardDetail";
import { ParamList } from "../utils/types";

const Stack = createNativeStackNavigator<ParamList>();

function Home() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AwardDetail"
        component={AwardDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Home;
