import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Modal,
  Pressable,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export interface NavOption {
  label: string;
  screen: string;
}

const NavBar: React.FC = () => {
  const navigation = useNavigation<any>();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const navigateToScreen = (screenName: string) => {
    setModalVisible(false);
    navigation.navigate(screenName);
  };

  const navigationOptions: NavOption[] = [
    { label: "Home", screen: "Home" },
    { label: "Awards and Outputs", screen: "AwardsAndOutputs" },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal} style={styles.button}>
        <FontAwesome
          name={isModalVisible ? "chevron-up" : "chevron-down"}
          size={25}
          color="black"
        />
      </TouchableOpacity>
      <Modal
        transparent
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable
          style={styles.modalContainer}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            {navigationOptions.map((option) => (
              <TouchableOpacity
                key={option.label}
                onPress={() => navigateToScreen(option.screen)}
              >
                <Text style={styles.navLink}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: -20,
  },
  navLink: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: "left",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#efefef",
    height: 50,
    width: "90%",
    paddingHorizontal: 20,
    zIndex: 1,
  },
  modalContainer: {
    width: "100%",
    height: "100%",
    marginTop: 96,
    marginHorizontal: 5,
    paddingHorizontal: 20,
  },
  modalContent: {
    position: "absolute",
    backgroundColor: "#fff",
    width: "100%",
    top: 50,
    shadowColor: "#000000",
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
  },
});

export default NavBar;
