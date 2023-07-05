import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageStyle,
  Text,
} from "react-native";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer: React.FC = () => {
  const handleDHSCClick = () => {
    console.log("Department of Health & Social Care clicked");
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column1}>
          <SocialMediaLinks />
        </View>
        <View style={styles.column2}>
          <TouchableOpacity onPress={handleDHSCClick}>
            <Image
              source={{
                uri: "https://www.nihr.ac.uk/layout/4.0/assets/logo-dhsc-reversed.png",
              }}
              style={styles.logo as ImageStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column1}>
          <View style={styles.bottomNav}>
            <Text style={styles.text}>© NIHR</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#193E72",
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  column1: {
    flex: 1,
    alignItems: "flex-start",
  },
  column2: {
    flex: 1,
    alignItems: "flex-end",
  },
  logo: {
    width: 100,
    height: 150,
  },
  bottomNav: {
    flexDirection: "row",
  },
  text: {
    color: "white",
  },
});

export default Footer;
