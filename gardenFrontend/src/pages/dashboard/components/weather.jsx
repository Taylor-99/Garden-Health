
import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const weather = () => {

    const [isLoading, setLoading] = useState(true)
    const [cookies] = useCookies(['token']);

    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const fetchWeather = async () => {

            try {
                console.log("fetching weather data")
                const response = await fetch('http://localhost:4000/dash/getweather', {
                    credentials: 'include',
                    headers: {
                        Authorization: `Bearer ${cookies.token}`, // Include the token in the Authorization header
                      }
                });

                const data = await response.json()
                setWeatherData(data)
                setLoading(false)
            } catch (error) {
                console.error('Error:', error.message);
            }
        }

        fetchWeather();

    }, []);

    if (isLoading) return <p>Loading...</p>
    if (!weatherData) return <p>No weather data</p>
    console.log(weatherData)

    //convert from Kelvin to Fahrenheit
    let fahrenheit = ((weatherData.main.temp) - 273.15) * 1.8 + 32

    fahrenheit = fahrenheit.toFixed(2)

    return (
        <div className="flex justify-center">
            <div className="bg-gray-200 p-4 rounded-lg shadow-md flex items-center justify-between max-w-xs">
                <div className="card">
                    <img
                        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                        className="w-12 h-12"
                        alt="Weather Icon"
                    />
                    <p>{weatherData.weather[0].description}</p>
                </div>
                <div className="text-center">
                    <p className="text-sm text-gray-600">{weatherData.name}</p>
                    <p className="text-2xl font-bold" >{fahrenheit}°</p>
                </div>
            </div>
        </div>
    )
}

export default weather