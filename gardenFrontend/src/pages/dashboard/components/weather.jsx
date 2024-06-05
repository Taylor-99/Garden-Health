
import React, { useState, useEffect } from 'react';
// import fetch from 'isomorphic-unfetch'

const weather = () => {

    const [weatherData, setWeatherData] = useState([]);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const fetchWeather = async () => {

            try {
                console.log("fetching weather data")
                const response = await fetch('http://localhost:4000/dash/getweather', {
                    credentials: 'include'
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

    return (
        <div>weather</div>
    )
}

export default weather