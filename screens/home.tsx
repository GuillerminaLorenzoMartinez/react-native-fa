import React from "react";
import { View, Text } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomeScreen: React.FC = () => {
  return (
    <View>
      <Header />
      <Text>Welcome to the Home Screen!</Text>
      <Text>Enjoy exploring the app!</Text>
      <Footer />
    </View>
  );
};

export default HomeScreen;
