const path = require('path')
const express = require('express')
const hbs = require('hbs')
//const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
const port = process.env.PORT || 3000

// Define paths for express config
const publicDirPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup hbs engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup Static dir ro serve
app.use(express.static(publicDirPath))

app.get('',(req, res) =>{
    res.render('index')
})

app.get('/about', (req, res) =>{
    res.render('about')
})

app.get('/contact', (req, res) =>{
    res.render('contact')
})

app.get('/weather', (req, res) =>{

    if(!req.query.address){
        return res.send({
            error: 'Please provide address'
        })
    }
    const address = req.query.address
    forecast(address, (error, forecastData) => {
        if(error){
          return res.send({ error })
        }
        res.send(forecastData)
    })
})

app.get('/contact/*', (req, res) =>{
    res.render('404', {
        error: 'Help articale not found',
        title: 'Help page',
        name: 'Mitesh Pokar'
    })
})
app.get('*', (req, res) =>{
    res.render('404', {
        error: 'Page not found',
        title: 'Help page',
        name: 'Mitesh Pokar'
    })

})


app.listen(port, () =>{
    console.log('Server is up on ' + port)
})