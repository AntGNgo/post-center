const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 3001
const postRoutes = require('./routes/postRoutes')


require('./db/dbConnection')

app.use(cors())
app.use(express.json())

app.use(postRoutes)


app.listen(port, () => console.log(`Listening on port: ${port}`))