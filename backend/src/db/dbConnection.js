const mongoose = require('mongoose')

mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => console.log('There has been an error'))

db.once('open', () => console.log('Connected'))