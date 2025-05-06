import React from "react";

// const upComingHours = data.filter(dateObj => {
//     const date_hour = new Date(dateObj);
//     return date_hour > currentTime;

// });

const HourlyForecast = ({ data, currentTimeStr }) => {
    console.log(data)

    const upComingHours = data.filter(hourObj => {
        const currentTime = new Date(currentTimeStr)
        const hourTime = new Date(hourObj.time)
        return hourTime > currentTime;
    }).slice(0,5)

    if (!data || data.length === 0) return null;
    return (
        <div>
            <h3>Hourly Forecast</h3>
            <div className="forecast-row">
                {upComingHours.map( (hour, index) => (
                    <div key={index} className="forecast-box">
                        <div className="icon"><img src={hour.condition.icon} alt={hour.condition.text}/></div>
                        <p>{hour.time.split(' ')[1]}</p>
                        <p>{hour.condition.text}</p>
                        <p>{hour.temp_c} C</p>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default HourlyForecast;