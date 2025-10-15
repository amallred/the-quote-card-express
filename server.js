// Import Express package
"use strict";

const express = require("express");
const app = express();

// Store port number 
const port = 8080;

// Include packages
require('dotenv').config();
const cors = require('cors');

app.use(cors());

// Static files are all in public folder; html, css, client-side js
// Middleware function
app.use(express.static("./public"));


// Unsure what these do; will look into it

app.use(express.json());
app.use(express.urlencoded({extended: false}));


// async function getRandomImage() {
//     const endpoint = `https://api.unsplash.com/photos/random/?client_id=${process.env.CLIENT_ID}`;
//     try {
//         const response = await fetch(endpoint);
//         const returnedData = await response.json();
//         const receivedPhotoUrl = returnedData.urls.regular;

//         return receivedPhotoUrl;
//     } catch (error) {
//         console.error(error);
//     }
// };


// Create route on back-end
app.use('/api/v1/getRandomImage', async(request, response) => {
    response.status(200).json({
        status: 200,
        data: process.env.CLIENT_ID
    });
});


// Press Ctrl and click the link to open the server when we start running the program.
app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
    console.log('Press Ctrl+C to end this process.');
});