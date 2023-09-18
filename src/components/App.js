import React from "react";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";
import ForecastSummary from "./ForecastSummary";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import SearchForm from "./SearchForm";
import { useState, useEffect } from "react";
import getForecast from "../requests/getForecast";

function App() {
  const [ selectedDate, setSelectedDate ] = useState(0);
  const [ forecasts, setForecasts ] = useState([]);
  const [ location, setLocation ] = useState({ city: "", country: "" });
  const [ searchText, setSearchText ] = useState("");
  const [errorMessage, setErrorMessage ] = useState("");
  const selectedForecast = forecasts.find(forecast => forecast.date === selectedDate );
  const handleCitySearch = () => {
    getForecast(setSelectedDate, setForecasts, setLocation);
  };
  const onSubmit = handleCitySearch;

  const handleForecastSelect = (date) => setSelectedDate(date);

  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation);
  }, []);
  
  return (
    <div className="weather-app">
        <LocationDetails
        city={location.city} 
        country={location.country} 
        errorMessage={errorMessage}
        />
        <SearchForm />
        <ForecastSummaries
          forecasts={forecasts}
          onForecastSelect={handleForecastSelect}
        />
        {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
};

export default App;
