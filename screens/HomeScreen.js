import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  Feather,
  Entypo,
  MaterialCommunityIcons,
  FontAwesome,
  Fontisto,
} from "@expo/vector-icons";

const HomeScreen = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3]);
  const handleLocationUpdate = (location) => {};
  return (
    <View style={{ flex: 1, padding: 0 }}>
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
            top: 60,
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
          <View style={{ marginTop: 110, marginLeft: 10 }}>
            {locations.map((location, index) => (
              <Pressable
                key={index}
                style={{
                  backgroundColor: "gray",
                  borderRadius: 20,
                  width: "95%",
                  opacity: 0.4,
                  marginTop: 3.5,
                  padding: 8,
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
                    fontSize: 16,
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
              style={{ width: 150, height: 150 }}
              source={require("../images/sunny.png")}
            />
            <Text
              style={{
                marginTop: 10,
                color: "white",
                fontWeight: "bold",
                fontSize: 50,
              }}
            >
              25°C
            </Text>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              Sunny
            </Text>
            <View style={styles.otherStatsContainer}>
              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons
                  name="weather-windy"
                  size={24}
                  color="white"
                />
                <Text style={{ color: "white", fontWeight: "bold" }}>22km</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Feather name="droplet" size={24} color="white" />
                <Text style={{ color: "white", fontWeight: "bold" }}>20%</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Feather name="sunrise" size={24} color="white" />
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  6:10 AM
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 15,
              marginTop: 40,
              marginLeft: 20,
            }}
          >
            <FontAwesome name="calendar" size={24} color="white" />
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 19 }}>
              Daily forecast
            </Text>
          </View>
        </View>
        <ScrollView
          style={{ position: "absolute", bottom: 50 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.dailyForecastContainer}>
            <Fontisto name="day-lightning" size={24} color="white" />
            <Text style={{ color: "white", fontWeight: "bold" }}>Monday</Text>
            <Text style={{ color: "white", fontWeight: "bold" }}>25°C</Text>
          </View>
          <View style={styles.dailyForecastContainer}>
            <Fontisto name="day-lightning" size={24} color="white" />
            <Text style={{ color: "white", fontWeight: "bold" }}>Tuesday</Text>
            <Text style={{ color: "white", fontWeight: "bold" }}>25°C</Text>
          </View>
          <View style={styles.dailyForecastContainer}>
            <Fontisto name="day-lightning" size={24} color="white" />
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Wednesday
            </Text>
            <Text style={{ color: "white", fontWeight: "bold" }}>25°C</Text>
          </View>
          <View style={styles.dailyForecastContainer}>
            <Fontisto name="day-lightning" size={24} color="white" />
            <Text style={{ color: "white", fontWeight: "bold" }}>Thursday</Text>
            <Text style={{ color: "white", fontWeight: "bold" }}>25°C</Text>
          </View>
          <View style={styles.dailyForecastContainer}>
            <Fontisto name="day-lightning" size={24} color="white" />
            <Text style={{ color: "white", fontWeight: "bold" }}>Friday</Text>
            <Text style={{ color: "white", fontWeight: "bold" }}>25°C</Text>
          </View>
          <View style={styles.dailyForecastContainer}>
            <Fontisto name="day-lightning" size={24} color="white" />
            <Text style={{ color: "white", fontWeight: "bold" }}>Saturday</Text>
            <Text style={{ color: "white", fontWeight: "bold" }}>25°C</Text>
          </View>
          <View style={styles.dailyForecastContainer}>
            <Fontisto name="day-lightning" size={24} color="white" />
            <Text style={{ color: "white", fontWeight: "bold" }}>Sunday</Text>
            <Text style={{ color: "white", fontWeight: "bold" }}>25°C</Text>
          </View>
        </ScrollView>
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
    top: 260,
    right: 10,
    position: "absolute",
    width: "100%",
    paddingHorizontal: 2,
  },
  forecastSectionTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  weatherIconandDegreeContainer: {
    marginTop: 30,
    marginLeft: 30,
    alignItems: "center",
    gap: 20,
  },
  otherStatsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 60,
  },
  dailyForecastContainer: {
    marginLeft: 20,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3, // Adjust the shadow opacity
    shadowRadius: 3,
    elevation: 5,
  },
});
