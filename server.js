//reuiring npm's and other files for this app
const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
// const path = require("path");

//setting express and modular port
const PORT = process.env.PORT || 3001;


const app = express();



// Express to set route 
app.use(express.static("public"));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);
app.use(htmlRoutes);


// listener to start server/app
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
