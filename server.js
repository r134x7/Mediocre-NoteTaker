const express = require("express");

const app = express();

const db = require("./db/db.json") // the database filepath

const PORT = process.env.PORT || 3001;

app.use(express.json()); // middleware to parse json data
app.use(express.urlencoded({ extended: true })); // middleware to parse URL-encoded data

app.use(express.static('public')); // middleware to GET the static files without having to write a GET request

app.listen(PORT, () => {
    console.log(`Note Taker listening at http://localhost:${PORT}`);
  });

//app.verb("route", (request, response) => res.send("something") || res.json(db))

// will most likely need express 
// public folder contains static files

// there is an index page
// have to set up a GET route for the notes page

// most likely need to validate { title: "", text: ""} via destructuring when notes are entered.

// require fs for writing db file
// readfile, parse data, push new data to array, write file json stringify

// see if modularization is needed, probably not when there's only two routes

// add wildcard to index route placed after the other routes due to linearity
