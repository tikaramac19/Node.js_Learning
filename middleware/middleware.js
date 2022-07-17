const express = require('express');
const app = express();
const port = 8080;

app.use('/products',(req,res,next)=>{
    res.send('<h3>Hello from "PRODUCTS PAGE" ! </h3>')
})

app.use('/',(req,res,next)=>{
    res.send('<h3>Hello from expressJS ! </h3>')
})

// This is the simple code that allows us to route our request into different middleware

// If we have a middleware that should be applied to all requests, we would simply add it on top of
// all the other middleware

app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`);
})