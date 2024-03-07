import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Feather, Entypo } from "@expo/vector-icons";

const HomeScreen = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3]);
  const handleLocationUpdate = (location) => {};
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../images/bgimage.jpg")}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            position: "absolute",
            justifyContent: "space-between",
            top: 80,
          }}
        >
          <TextInput
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            style={styles.searchBar}
            placeholder="Search city"
          />
          <Pressable
            onPress={() => setShowSearch((currentState) => !currentState)}
            style={{ position: "absolute", top: 10, right: 22 }}
          >
            <Entypo name="magnifying-glass" size={24} color="white" />
          </Pressable>
        </View>
        {showSearch && (
          <View style={{ marginTop: 130, marginLeft: 10 }}>
            {locations.map((location, index) => (
              <Pressable
                key={index}
                style={{
                  backgroundColor: "gray",
                  borderRadius: 20,
                  width: "95%",
                  opacity: 0.4,
                  marginTop: 3.5,
                  padding: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}
                onPress={() => handleLocationUpdate(location)}
              >
                <Feather name="map-pin" size={24} color="white" />
                <Text
                  style={{
                    marginLeft: 30,
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  London, United Kingom
                </Text>
              </Pressable>
            ))}
          </View>
        )}
        <View style={styles.forecastSectionContainer}>
          <View style={styles.forecastSectionTextContainer}>
            <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
              London,
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 23,
                fontWeight: "400",
                marginTop: 5,
              }}
            >
              United Kingdom
            </Text>
          </View>
          <View style={styles.weatherIconandDegreeContainer}>
            <Image
              style={{ width: 200, height: 200 }}
              source={require("../images/sunny.png")}
            />
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 50 }}>
              25°C
            </Text>
            <Text style={{ color: "white", fontWeight: "bold" }}>Sunny</Text>
          </View>
        </View>
      </ImageBackground>
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
    marginLeft: 10,
    color: "white",
    fontWeight: "bold",
    width: "95%",
    backgroundColor: "gray",
    borderRadius: 20,
    fontSize: 20,
    padding: 12,
    opacity: 0.3,
  },
  forecastSectionContainer: {
    position: "absolute",
    top: 300,
    left: "15%",
  },
  forecastSectionTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  weatherIconandDegreeContainer: {
    marginTop: 50,
    marginLeft: 30,
    alignItems: "center",
    gap: 20,
  },
});
