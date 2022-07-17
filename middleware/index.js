const http = require('http');
const port = 8080;

const express = require('express');
const app = express();

// app.use() allows us to add a new middleware function, it accepts an array of 
// so called request handlers here and it has some other use cases too.
app.use((req, res, next)=>{
    console.log('in an middleware');

    next(); // allows the request to continue to the next middleware in line
});

app.use((req,res, next) =>{
    console.log('in an another middleware');

    res.send('<h1>Hello from express !</h1>'); // it allows to send a response
})

// the function we pass to app.use() will be executed for every incomming 
// request and this function will receive three arguments.i.e req, res, next()

// Next is actually a function, a function that will be passed to this function 
// by expressJS 

// next() function weare receiving here has to be executed to allow the 
// the request to travel on to the next middleware.


const server = http.createServer(app);

server.listen(port, ()=> console.log(`server is running at http://localhost:8080`));

// app.listen(port);

// Express js is all about middleware
// so instead of just having one request handler, you will actually have a possibility of 
// ... hooking in multiple functions which request will go through until you 
// send a response

// This allows you to split your code into multiple blocks or pieces instead of 
// having one huge function that does everything .
