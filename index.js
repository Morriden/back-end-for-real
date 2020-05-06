const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const { transformedLocation } = require('utils.js')

const locationData = require('./data/geo.json')


const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

//req.query for multiple searces / like `new URLSearchParams`
//req.params for one search / :id `this.props.match.params.whatever` in react router

app.get('/location', (request, response) => {
    console.log(request.query);
    const transformedData = transformedLocation(locationData);
    response.json({ transformedData });

app.listen(PORT, () => console.log(`running on port ${PORT}`));