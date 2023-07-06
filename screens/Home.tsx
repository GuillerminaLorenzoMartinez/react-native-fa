import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";

const HomeScreen: React.FC = () => {
  const handleSearch = () => {
    console.log("Search clicked");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <SearchBar onSearch={handleSearch} />
          <Text>Welcome to the Home Screen!</Text>
          <Text>Enjoy exploring the app!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
