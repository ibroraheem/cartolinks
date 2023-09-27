const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 5000;

const API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '90edc2274a63e25d53d0db35f4d858cb'; // Replace with your OpenWeatherMap API key
const CITY = 'Lagos,NG';

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(API_ENDPOINT, {
            params: {
                q: CITY,
                appid: API_KEY,
                units: 'metric'
            }
        });

        const temp = response.data.main.temp;
        res.send(`Current Temperature for Lagos, Nigeria: ${temp}°C`);
    } catch (error) {
        res.send('Error retrieving weather data.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
