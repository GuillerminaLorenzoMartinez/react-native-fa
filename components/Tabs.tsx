import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import AwardsAndOutputsScreen from "../screens/AwardsAndOutputs";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Awards and Outputs"
        component={AwardsAndOutputsScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
