import axios from "axios";

const forecastEndPoint = (cityName, days, apiKey) => {
  return `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=${days}&aqi=no&alerts=no`;
};

const locationsEnpoint = (cityName, apiKey) => {
  return `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${cityName}`;
};

const apiCall = async (endpoint) => {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (err) {
    console.log("Error fecthing data", err);
  }
};

export const fetchWeatherForecast = (cityName, days, apiKey) => {
  return apiCall(forecastEndPoint(cityName, days, apiKey));
};

export const fetchLocation = (cityName, apiKey) => {
  return apiCall(locationsEnpoint(cityName, apiKey));
};
