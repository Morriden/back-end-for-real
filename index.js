const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const { transformedLocation, transformedWeather } = require('./utils.js');
const superagent = require('superagent');

// const locationData = require('./data/geo.json');
// const weatherData = require('./data/weather.json');


const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

//req.query for multiple searces / like `new URLSearchParams`
//req.params for one search / :id `this.props.match.params.whatever` in react router

app.get('/location', async(request, response) => {
    try {
        const data = await superagent.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_IQ_KEY}&q=${request.query.search}&format=json`);
        const transformedLocationData = transformedLocation(data.body);
        response.json(transformedLocationData);
    } catch (e) {
        console.error(e);
        response.json({
            status: 404,
            responseText: `You've come too far fool!`,
        });
    }
});

app.get('/weather', async(request, response) => {
    try {
        const data = await superagent.get(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${request.query.latitude}&lon=${request.query.longitude}&key=${process.env.WEATHER_KEY}`);
        const transformedWeatherData = transformedWeather(data.body);
        response.json(transformedWeatherData);
    } catch (e) {
        console.error(e);
        response.json({
            status: 404,
            responseText: `You've come too far fool!`,
        });
    }
});

app.listen(PORT, () => console.log(`running on port ${PORT}`));