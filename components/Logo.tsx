import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  ImageStyle,
  StyleSheet,
} from "react-native";

const Logo: React.FC = () => {
  return (
    <View style={styles.container}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 10,
  },

  logo: {
    width: 350,
    height: 50,
  },
});

export default Logo;
