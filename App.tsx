import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./router/Home";
import AwardsAndOutputs from "./router/AwardsAndOutputs";

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Logo />
      <NavBar />
      {/* <Header /> */}
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AwardsAndOutputs"
          component={AwardsAndOutputs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
