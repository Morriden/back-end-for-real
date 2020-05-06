const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const { transformedLocation } = require('./utils.js');

const locationData = require('./data/geo.json');
const weatherData = require('./data/weather.json');


const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

//req.query for multiple searces / like `new URLSearchParams`
//req.params for one search / :id `this.props.match.params.whatever` in react router

app.get('/location', (request, response) => {
    const transformedLocationData = transformedLocation(locationData);
    response.json({ transformedLocationData });
});

app.get('/weather', (request, response) => {
    const transformedWeatherData = transformedWeather(weatherData);
    response.json({ transformedWeatherData });
});

app.listen(PORT, () => console.log(`running on port ${PORT}`));