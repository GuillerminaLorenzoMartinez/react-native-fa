import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Header from "../components/Header";

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header />
        <Text>Welcome to the Home Screen!</Text>
        <Text>Enjoy exploring the app!</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
