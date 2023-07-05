import React from "react";
import { View } from "react-native";
import SearchBar from "./SearchBar";
import Logo from "./Logo";

const Header: React.FC = () => {
  const handleSearch = () => {
    console.log("Search clicked");
  };

  return (
    <View>
      <Logo />
      <SearchBar onSearch={handleSearch} />
    </View>
  );
};

export default Header;
