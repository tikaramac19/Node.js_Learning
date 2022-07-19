const express = require('express');
const dotenv = require('dotenv');
const app = express();
const morgan = require('morgan');
dotenv.config({path: '.env'});
const PORT = process.env.PORT || 8080;

// log request
app.use(morgan('tiny'))

app.get('/', (req,res)=>{
    res.send("Crud Application")
});

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
