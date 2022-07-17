const http = require('http');
const port = 8080;

const express = require('express');
const app = express();


app.use((req, res, next)=>{
    console.log('in an middleware');

    next(); // allows the request to continue to the next middleware in line
});

app.use((req,res, next) =>{
    console.log('in an another middleware');
})




const server = http.createServer(app);

server.listen(port, ()=> console.log(`server is running at http://localhost:8080`));