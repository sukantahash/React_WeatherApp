import React from "react";

const CurrentWeather = ({ data }) => {
    if (!data) return null

    const {
        location: {name, country, localtime },
        current: {
            temp_c,
            condition: {text, icon},
            feelslike_c,
            wind_kph,
            humidity,
        },  
    } = data;

    return (
        <div>
            <h2 id="location">
                {name}, {country}
            </h2>
            <div className="local-time">Local Time: {localtime}</div>
            <h3>Current Weather</h3>
            <div className="weather-row">
                <img src={icon} alt={text} className="weather-icon"/>
                <div className="weather-details">
                    
                    <div className="temperature">{temp_c} C</div>
                    <div className="condition">{text}</div>
                    <div className="feels-like">Feels Like: {feelslike_c} C</div>
                    <div className="humidity">Humidity: {humidity} %</div>
                    <div className="wind">Wind: {wind_kph} km/h</div>

                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;