import React from "react";
import { View, Text } from "react-native";
import styles from "../components/styles";

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen!</Text>
      <Text style={styles.subtitle}>Enjoy exploring the app!</Text>
    </View>
  );
};

export default HomeScreen;
