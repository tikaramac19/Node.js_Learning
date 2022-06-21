require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 8080
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection
db.on('error', (error)=> console.error(error));
db.once('open', ()=> console.log('connected to Database'));

app.use(express.json())

const subscribersRouter = require('./routes/subscribers');

// app.use('/subscribers', subscribersRouter)



app.listen(PORT, ()=>{
    console.log(`The server is started at ${PORT}`);
    
})