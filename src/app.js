const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
require('./db/dbConnection')

app.get('/', (req, res) => {
    res.send('Working')
})

app.post('/post', (req, res) => {
    
})


app.listen(port, () => console.log(`Listening on port: ${port}`))