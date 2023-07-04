import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "./Header";

const AppLayout: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      {/* Add other content or components here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
});

export default AppLayout;
