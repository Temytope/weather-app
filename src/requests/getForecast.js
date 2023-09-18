import React from "react";
import axios from "axios";

const getForecast = (searchText, setSelectedDate, setForecasts, setLocation, setErrorMessage) => {
  let endpoint = "cmd-shift-weather-app-alt.onrender.com/forecast";
  if (searchText){
    endpoint += `?city=${searchText}`;

  }
  return axios
  .get(endpoint)
  .then((response) => {
    setSelectedDate(response.data.forecasts[0].date);
    setForecasts(response.data.forecasts);
    setLocation(response.data.location);
  })
  .catch((error) => {
    const { status } = error.response;
    if (status === 404) {
      setErrorMessage("No such town or city, try again!")
      console.error("Location is invalid", error);
    }
    if (status === 500) {
      setErrorMessage("Oops, server error, try again later.")
      console.error("Server error", error);
    }
  });
};

export default getForecast;