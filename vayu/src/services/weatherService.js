import axios from 'axios';

const API_KEY = '4da8e932eaab4e02aec112840250505'
const BASE_URL = 'http://api.weatherapi.com/v1'

export const getCurrentWeather = async (city) => {
    const response = await axios.get(`${BASE_URL}/current.json`, {
        params: {
            key: API_KEY,
            q: city
        },
    });
    console.log(response)
    return response.data;
};

export const getForecast = async (city, days=5) => {
    const response = await axios.get(`${BASE_URL}/forecast.json`, {
        params: {
            key: API_KEY,
            q: city,
            days
        },
    });
    const data = response.data;
    const forecastData = data.forecast.forecastday;
    return forecastData;
}