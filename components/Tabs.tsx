import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../router/Home";
import AwardsAndOutputs from "../router/AwardsAndOutputs";

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
        component={AwardsAndOutputs}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
