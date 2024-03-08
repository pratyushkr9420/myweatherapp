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
import { fetchWeatherForecast, fetchLocation } from "../api/weather";
import { REACT_APP_API_KEY } from "@env";

const HomeScreen = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const [currentLocation, setCurrentLocation] = useState({});
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const handleSearch = (searchValue) => {
    if (searchValue.length > 2) {
      setTimeout(() => {
        fetchLocation(searchValue, REACT_APP_API_KEY).then((data) => {
          console.log(data[0]);
          setLocations(data);
        });
      }, 3000);
    }
  };

  const handleLocationUpdate = (location) => {
    setLocations([]);
    fetchWeatherForecast(location.name, 7, REACT_APP_API_KEY).then((data) => {
      setCurrentLocation(data);
      console.log("The current data is", data);
    });
    setShowSearch((currentState) => !currentState);
  };
  return (
    <View style={{ flex: 1, padding: 0 }}>
      <ImageBackground style={{ flex: 1 }} source={require("../images/bg.jpg")}>
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
            onChangeText={(text) => handleSearch(text)}
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
          <View
            style={{
              marginTop: 110,
              marginLeft: 10,
            }}
          >
            {locations.map((location, index) => (
              <Pressable
                key={index}
                style={{
                  backgroundColor: "gray",
                  borderRadius: 20,
                  width: "95%",
                  opacity: 1.0,
                  marginTop: 2.0,
                  marginLeft: 5,
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
                  {location?.name},{location?.country}
                </Text>
              </Pressable>
            ))}
          </View>
        )}
        <View style={styles.forecastSectionContainer}>
          <View style={styles.forecastSectionTextContainer}>
            <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
              {currentLocation?.location?.name},
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 23,
                fontWeight: "400",
                marginTop: 5,
              }}
            >
              {currentLocation?.location?.country}
            </Text>
          </View>
          <View style={styles.weatherIconandDegreeContainer}>
            <Image
              style={{ width: 150, height: 150 }}
              source={{
                uri: "http:" + currentLocation?.current?.condition?.icon,
              }}
            />
            <Text
              style={{
                marginTop: 10,
                color: "white",
                fontWeight: "bold",
                fontSize: 50,
              }}
            >
              {currentLocation?.current?.temp_c}°C
            </Text>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              {currentLocation?.current?.condition?.text}
            </Text>
            <View style={styles.otherStatsContainer}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons
                  name="weather-windy"
                  size={24}
                  color="white"
                />
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  {currentLocation?.current?.condition?.wind_kph}km
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Feather name="droplet" size={24} color="white" />
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  {currentLocation?.current?.condition?.humidity}%
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Feather name="sunrise" size={24} color="white" />
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  {currentLocation?.forecast?.forecastday[0]?.astro?.sunrise}
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
              marginLeft: 35,
            }}
          >
            <FontAwesome name="calendar" size={24} color="white" />
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 19 }}>
              Daily forecast
            </Text>
          </View>
        </View>
        <ScrollView
          style={{ position: "absolute", bottom: 70 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {currentLocation?.forecast?.forecastday.map((day, index) => {
            const currentDayObject = new Date(day.date);
            const currentDay = daysOfWeek[currentDayObject.getDay()];
            return (
              <View key={index} style={styles.dailyForecastContainer}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={{ uri: "http:" + day?.day?.condition?.icon }}
                />
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  {currentDay}
                </Text>
                <Text style={{ color: "white", fontWeight: "bold" }}>25°C</Text>
              </View>
            );
          })}
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
    marginLeft: 12,
    color: "white",
    fontWeight: "bold",
    width: "95%",
    backgroundColor: "gray",
    borderRadius: 20,
    fontSize: 20,
    padding: 11,
    opacity: 0.3,
  },
  forecastSectionContainer: {
    top: 240,
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
    marginLeft: 20,
    alignItems: "center",
    gap: 20,
  },
  otherStatsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 60,
  },
  dailyForecastContainer: {
    width: 100,
    height: 100,
    marginLeft: 30,
    padding: 8,
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
    alignItems: "center",
    justifyContent: "center",
  },
});
