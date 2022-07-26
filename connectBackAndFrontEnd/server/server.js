const express = require('express')
const app = express()
const dotenv = require('dotenv');

const connectDb = require('./server/database/connection')

dotenv.config({path: '.env'});
const PORT = process.env.PORT || 8080;

//connecting mongodb
connectDb();


app.use('/', (req,res)=>{
    res.send("Home Route")
})


app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})