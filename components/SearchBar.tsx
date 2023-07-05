import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface SearchBarProps {
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
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
        <TouchableOpacity onPress={onSearch} style={styles.searchButton}>
          <FontAwesome name="search" size={25} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 40,
    marginHorizontal: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "gray",
    paddingHorizontal: 10,
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
