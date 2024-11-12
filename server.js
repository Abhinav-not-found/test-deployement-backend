const express = require('express');
const colors = require('colors');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

// Define routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/home', (req, res) => {
    res.send('Welcome to my home page!');
});

// Use Vercel's dynamic port or default to 3000 for local testing
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`.bgCyan);
});
