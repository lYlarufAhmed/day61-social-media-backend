require('dotenv').config()
const express = require('express')
const morgan = require('morgan')


const app = express()

// middlewares
app.use(morgan('tiny'))


app.get('/', (req, res) => {
    res.send('Hello world!')
})
module.exports = app
