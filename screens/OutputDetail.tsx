import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import ShortSearchBar from "../components/ShortSearchBar";
import { OutputDetailScreenRouteProp } from "../utils/types";

const OutputDetail: React.FC = () => {
  const route = useRoute<OutputDetailScreenRouteProp>();

  const { id, title } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ShortSearchBar />
        <View>
          <Text>{title}</Text>
          <Text>Output ID: {id}</Text>
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
