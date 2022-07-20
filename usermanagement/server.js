const express = require('express');
const dotenv = require('dotenv');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

// call the connection from database
const connectDB = require('./server/database/connection');

dotenv.config({path: '.env'});
const PORT = process.env.PORT || 8080;

// log request
app.use(morgan('tiny')) // alows to console the request when we refresh the page

// mongodb connection
connectDB();


// parse request to body-parser
app.use(bodyParser.urlencoded({extended: true}));

// set view engine 
app.set("view engine", "ejs");  // allows us to use ejs template engine
// app.set("views", path.resolve(__dirname, "views/ejs"));


// load assets

app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
// css/style.css
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));


// load routers
app.use('/', require('./server/routes/router'));
 
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
