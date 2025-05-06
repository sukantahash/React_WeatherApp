import React from "react";


const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-GB', {
        day: 'numeric',
        month: 'short',
        weekday: 'short',
    }).format(date)
}

const DailyForecast = ({ data }) => {
    console.log(data)
    if (!data || data.length === 0) return null;

    

    return (
        <div>
            <h3>Daily Forecast</h3>
            <div className="forecast-row">
                {data.map( (day, index) => (
                    <div key={index} className="forecast-box">
                        {/* <div className="day"></div> */}
                        <div className="icon"><img src={day.day.condition.icon} alt={day.day.condition.text}/></div>
                        <p>{formatDate(day.date)}</p>
                        <p>{day.day.condition.text}</p>
                        <p>{day.day.avgtemp_c}° C</p>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default DailyForecast;