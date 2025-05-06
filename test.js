const axios = require('axios');

const API_KEY = '4da8e932eaab4e02aec112840250505';
const BASE_URL = 'http://api.weatherapi.com/v1';


const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-GB', {
        day: 'numeric',
        month: 'short',
        weekday: 'short',
    }).format(date)
}


const getForecast = async (city, days=5) => {
    try {
        const response = await axios.get(`${BASE_URL}/forecast.json`, {
            params: {
                key: API_KEY,
                q: city,
                days
            },
        });
        console.log('Type: ', typeof(response.data))
        console.log('Date: ', response.data.forecast.forecastday[0].date)
        console.log('Type: ', typeof(response.data.forecast.forecastday[0].date))
        console.log('Date: ', formatDate(response.data.forecast.forecastday[0].date))
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
    
};


const getCurrentWeather = async (city) => {
    const response = await axios.get(`${BASE_URL}/current.json`, {
        params: {
            key: API_KEY,
            q: city
        },
    });
    console.log(response)
    return response.data;
};

(async () => {
    const city = 'Kolkata';
    try {
        const data = await getForecast(city);
        console.log(data);
    } catch (error) {
        console.error('Error', error.message)
    }
})();