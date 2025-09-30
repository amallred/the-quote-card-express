// Import Express package
"use strict";

const express = require("express");
const app = express();

// Store port number 
const port = 8080;

// Static files are all in public folder; html, css, client-side js
// Middleware function
app.use(express.static("./public"));


// Unsure what these do; will look into it
// WILL LOOK INTO IT
// RIGHT?!!

app.use(express.json());
app.use(express.urlencoded({extended: false}));
// (LOOK THIS UP ^^^)
// (LOOK THIS UP ^^^)
// (LOOK THIS UP ^^^)


app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
    console.log('Press Ctrl+C to end this process.');
});