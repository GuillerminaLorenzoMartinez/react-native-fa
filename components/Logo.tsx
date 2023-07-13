import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  ImageStyle,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Logo: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
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
    alignItems: "center",

    marginTop: -290,
    marginBottom: -320,
  },

  logo: {
    width: 350,
    height: 50,
  },
});

export default Logo;
