// IMPORT MODULES under test here:
// import example from '../src/example.js';
const { transformedLocation, transformedWeather, transformedTrail } = require('../utils.js');
const locationData = require('../data/geo.json');
const weatherData = require('../data/weather.json');
const trailData = require('../data/trail.json');


const test = QUnit.test;

test('Test the function to return Portland', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = {
        formatter_query: 'Portland, Multnomah County, Oregon, USA',
        latitude: '45.5202471',
        longitude: '-122.6741949'
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const results = transformedLocation(locationData);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(results, expected);
});

test('test function for null if they provide nothing', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = {};
    //Act 
    // Call the function you're testing and set the result to a const
    const results = transformedLocation(null);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(results, expected);
});

test('Test function to display 8 days of weather', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = [
        {
            forecast: 'Scattered clouds',
            time: '2020-05-05'
        },
        {
            forecast: 'Light snow',
            time: '2020-05-06'
        },
        {
            forecast: 'Few clouds',
            time: '2020-05-07'
        },
        {
            forecast: 'Few clouds',
            time: '2020-05-08'
        },
        {
            forecast: 'Broken clouds',
            time: '2020-05-09'
        },
        {
            forecast: 'Overcast clouds',
            time: '2020-05-10'
        },
        {
            forecast: 'Overcast clouds',
            time: '2020-05-11'
        },
        {
            forecast: 'Light rain',
            time: '2020-05-12'
        },
    ];
    //Act 
    // Call the function you're testing and set the result to a const
    const results = transformedWeather(weatherData);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(results, expected);
});

test('test function for null weather', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = {};
    //Act 
    // Call the function you're testing and set the result to a const
    const results = transformedWeather(null);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(results, expected);
});

test('test function of trail creation', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = [{
        name: 'Boulder Skyline Traverse',
        location: 'Superior, Colorado',
        length: 16.3,
        stars: 4.7,
        star_votes: 78,
        summary: 'The classic long mountain route in Boulder.',
        trail_url: 'https://www.hikingproject.com/trail/7011192/boulder-skyline-traverse',
        conditions: 'Minor Issues',
        condition_date: '2020-04-16 20:56:03',
    }];
    //Act 
    // Call the function you're testing and set the result to a const
    const results = transformedTrail(trailData);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(results, expected);
});