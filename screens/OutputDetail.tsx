import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import ShortSearchBar from "../components/ShortSearchBar";

const OutputDetail: React.FC = () => {
  const handleSearch = () => {
    console.log("Search clicked");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ShortSearchBar onSearch={handleSearch} />
        <View>
          <Text>Welcome to the Output</Text>
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

export default OutputDetail;