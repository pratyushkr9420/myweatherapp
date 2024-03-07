import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#4ec4f2" }}
    >
      <TextInput
        placeholderTextColor="rgba(255, 255, 255, 0.7)"
        style={styles.searchBar}
        placeholder="Search city"
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    opacity: 0.8,
  },
  searchBar: {
    position: "absolute",
    marginLeft: 10,
    color: "white",
    fontWeight: "bold",
    width: "95%",
    backgroundColor: "black",
    borderRadius: 20,
    fontSize: 20,
    padding: 10,
    opacity: 0.1,
    top: 80,
  },
});
