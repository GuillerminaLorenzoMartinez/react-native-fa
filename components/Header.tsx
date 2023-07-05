import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  ImageStyle,
  StyleSheet,
} from "react-native";
import SearchBar from "./SearchBar";

const Header: React.FC = () => {
  const handleSearch = () => {
    console.log("Search clicked");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={() => console.log("Logo clicked")}>
          <Image
            source={{
              uri: "https://www.nihr.ac.uk/layout/4.0/assets/logos/nihr-master-logo-325px.png",
            }}
            style={styles.logo as ImageStyle}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <SearchBar onSearch={handleSearch} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    paddingBottom: 10,
    backgroundColor: "white",
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 10,
  },
  logo: {
    width: 300,
    height: 50,
  },
  searchContainer: {
    alignItems: "center",
    marginTop: 20,
  },
});

export default Header;
