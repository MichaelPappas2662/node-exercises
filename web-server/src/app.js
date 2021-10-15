const path = require('path')
const express = require('express');
const hbs = require('hbs')

const app = express();

// Define paths for Express config 
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPaths = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPaths)

// Setup static directory to server
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Michael Pappas'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Michael Pappas'
    })
})

app.get('/help', (req, res) => {
    res.render('about', {
        title: 'Help',
        name: 'Michael Pappas'
    })
})



app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});