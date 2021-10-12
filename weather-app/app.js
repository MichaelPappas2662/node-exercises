const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=01d9a447011c42178aca45028f9bacbc&query=42.3605,-71.0596&units=f';


request({ url: url, json: true }, (error, response) => {
    console.log(`${response.body.current.weather_descriptions[0]}.It is currently ${response.body.current.temperature} degrees out `);
})