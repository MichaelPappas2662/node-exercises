const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=01d9a447011c42178aca45028f9bacbc&query=sydney';
// pk.eyJ1IjoibWljaGFlbHBhcHBhczI2NjIiLCJhIjoiY2t1bmNmMmR4MGo2MjJvbGk5eXpxejBtNCJ9.7XioTRWNeL3DRktwRJ-ySA
const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWljaGFlbHBhcHBhczI2NjIiLCJhIjoiY2t1bmNmMmR4MGo2MjJvbGk5eXpxejBtNCJ9.7XioTRWNeL3DRktwRJ-ySA"


request({ url: url, json: true }, (error, response) => {
    console.log(`${response.body.current.weather_descriptions[0]}.It is currently ${response.body.current.temperature} degrees out `);
})

request({url: geocodeUrl, json:true }, (error, response) => {
    console.log(`${response.body.features[0].center[0]} and ${response.body.features[0].center[1]}`);
})