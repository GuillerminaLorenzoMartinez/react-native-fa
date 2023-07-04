import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLayout from "./components/AppLayout";
import HomeScreen from "./screens/Home";

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AppLayout"
          component={AppLayout}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
