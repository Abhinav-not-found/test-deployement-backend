const express = require('express')
const colors = require('colors')
const app = express()
require('dotenv').config()
const cors = require('cors')
app.use(cors())


app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get("/home", (req, res) => {
    res.send('Welcome to my home page!')
})
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`.bgCyan)
})
