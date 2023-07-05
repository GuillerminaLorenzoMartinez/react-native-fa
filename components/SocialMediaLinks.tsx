import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SocialMediaLinks: React.FC = () => {
  const handleFacebookClick = () => {
    console.log("Facebook clicked");
  };

  const handleLinkedInClick = () => {
    console.log("LinkedIn clicked");
  };

  const handleTwitterClick = () => {
    console.log("Twitter clicked");
  };

  const handleYouTubeClick = () => {
    console.log("YouTube clicked");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.link} onPress={handleFacebookClick}>
        <FontAwesome name="facebook" size={20} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={handleLinkedInClick}>
        <FontAwesome name="linkedin" size={20} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={handleTwitterClick}>
        <FontAwesome name="twitter" size={20} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={handleYouTubeClick}>
        <FontAwesome name="youtube" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 5,
  },
  link: {
    marginHorizontal: 5,
  },
});

export default SocialMediaLinks;
