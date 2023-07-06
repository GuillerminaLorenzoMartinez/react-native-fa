import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface SearchBarProps {
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NIHR Funding and Awards</Text>
      <Text style={styles.subtitle}>
        Search for and analyse information on NIHR supported activity in health
        and care research, including expenditure and research findings
      </Text>
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
    backgroundColor: "#193E72",
  },
  inputContainer: {
    marginHorizontal: 10,
    marginBottom: 30,
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginTop: 40,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    margin: 20,
    textAlign: "center",
  },
});

export default SearchBar;
