import React from 'react';
import iconData2 from "../data/iconData2.json";

function ForecastSummary(props){
    const{
        date,
        description,
        icon,
        temperature,
        onSelect
    } = props;

    const formattedDate = new Date(date).toDateString()
    const weatherCode = icon.slice(0,1)

    return (
        <div className="forecast-summary" data-testid="forecast-summary">
            <div className="forecast-summary__date">
                {formattedDate}
            </div>
            <div className="forecast-summary__description">
                {description}
            </div>
            <div className="forecast-summary__icon" data-testid="forecast-icon">
                <img src={iconData2[weatherCode]} alt = "icon data"/>
            </div>
            <div className="forecast-summary__temperature">
                {temperature.max}
                &deg;C
            </div>
            <button type="button" onClick={() => onSelect(date)}>
                 More Details
            </button>
        </div>
    );

};

export default ForecastSummary;
