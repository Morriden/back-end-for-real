function transformedLocation(data) {
    try {
        const firstItem = data[0];
        return {
            formatter_query: firstItem.display_name,
            latitude: firstItem.lat,
            longitude: firstItem.lon
        };
    } catch (e) {
        return {};
    }
}

function transformedWeather(data) {
    try {
        const transformedData = data.data.map((forecast) => {
            return {
                forecast: forecast.weather.description,
                time: forecast.valid_date
            };
        });
        return transformedData.slice(0, 8);
    } catch (e) {
        return {};
    }
}

function transformedTrail(data) {
    const transformedData = data.trails.map((trail) => {
        return {
            name: trail.name,
            location: trail.location,
            length: trail.length,
            stars: trail.stars,
            star_votes: trail.starVotes,
            summary: trail.summary,
            trail_url: trail.url,
            conditions: trail.conditionStatus,
            condition_date: trail.conditionDate,
        };
    });
    return transformedData.splice(0);
}


module.exports = {
    transformedLocation,
    transformedWeather,
    transformedTrail,
};