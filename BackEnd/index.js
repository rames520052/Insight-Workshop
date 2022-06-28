// Importing the dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Defining the Express app
const app = express();

// Parsing incoming requrests with JSON payloads based on body-parser
app.use(express.json());
// Using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
// Enabling CORS for all requrests
app.use(cors());

app.get('/', (req, res) =>{
    res.send("<h1>Insight Workshop !!!!</h1>")
})

// Setting the server on Port 3000
app.listen(3000, () => {
    console.log("Server running at 3000 !!!");
})