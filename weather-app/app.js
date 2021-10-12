const request = require('request')
const geocode = require('./utils/geocode')
const forecas= require('./utils/forecast')

const weatherUrl = 'http://api.weatherstack.com/current?access_key=01d9a447011c42178aca45028f9bacbc&query=sydney';
// pk.eyJ1IjoibWljaGFlbHBhcHBhczI2NjIiLCJhIjoiY2t1bmNmMmR4MGo2MjJvbGk5eXpxejBtNCJ9.7XioTRWNeL3DRktwRJ-ySA
// const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWljaGFlbHBhcHBhczI2NjIiLCJhIjoiY2t1bmNmMmR4MGo2MjJvbGk5eXpxejBtNCJ9.7XioTRWNeL3DRktwRJ-ySA"




geocode('Sydney', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
})