import React from "react";
import ForecastSummary from "./ForecastSummary";
import "../styles/ForecastDetails.css"

function ForecastDetails( { forecast } ){
    const {
        date,
        temperature,
        wind,
        humidity
    } = forecast;

    const aFormattedDate = new Date(date).toDateString()

    return(
        <div className="forecast-details">
            <div className="forecast-details__date">
                {aFormattedDate}
            </div> 
            <div className="forecast-details__maxTemperature">
                {temperature.max}
                &deg;C
            </div>
            <div className="forecast-details__temperature__min">
                {temperature.min}
                &deg;C
            </div>
            <div className="forecast-details__wind__speed">
                {wind.speed}
            </div>
            <div className="forecast-details__wind__direction">
                {wind.direction}
            </div>
            <div className="forecast-details__humidity">
                {humidity}
            </div>
        </div>
    )

};

export default ForecastDetails;