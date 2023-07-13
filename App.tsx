import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tabs from "./components/Tabs";
import Logo from "./components/Logo";

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Logo />
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
