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


module.exports = {
    transformedLocation,
    transformedWeather,
};