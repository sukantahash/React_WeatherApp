import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { getCurrentWeather, getForecast } from '../services/weatherService';

import SearchBar from '../components/SearchBar';
import CurrentWeather from '../components/CurrentWeather';
import HourlyForecast from '../components/HourlyForecast';
import DailyForecast from '../components/DailyForecast';


const Home = () => {
    const { city } = useParams();
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [localtime, setLocalTime] = useState(null);
    const [error, setError] = useState(null);

    const selectedCity = city || 'Kolkata;'

    useEffect( () => {
        async function fetchWeather() {
            try {
                setError(null); // clear previous error
                const current = await getCurrentWeather(selectedCity);
                const forecastData = await getForecast(selectedCity);
                setWeather(current);
                setLocalTime(current.location.localtime)
                console.log(current);
                setForecast(forecastData);
                console.log('ForeCast: ', forecastData);
            } catch (err) {
                console.error(err)
                setWeather(null);
                setForecast(null);
                setError(`Could not fetch weather data for "${selectedCity}"`)
            }
            
        }
        fetchWeather();
    }, [selectedCity]);

    return (
        <div className="container">
            <SearchBar onSearch={selectedCity}/>
            <p style={{color: 'red'}}>{error}</p>
            {weather && <CurrentWeather data={weather}/>}
            {forecast && <DailyForecast data={forecast}/>}
            {forecast && <HourlyForecast data={forecast[0].hour} currentTimeStr={localtime}/>}
            
        </div>
    );
};

export default Home