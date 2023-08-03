import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Search" />
        <TouchableOpacity
          onPress={() => console.log("Close clicked")}
          style={styles.closeButton}
        >
          <FontAwesome name="close" size={25} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log("Search clicked")}
          style={styles.searchButton}
        >
          <FontAwesome name="search" size={25} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#193E72",
  },
  inputContainer: {
    marginHorizontal: 10,
    marginVertical: 30,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "gray",
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    height: 50,
  },
  closeButton: {
    marginRight: 30,
  },
  searchButton: {
    marginRight: 10,
  },
});

export default SearchBar;
