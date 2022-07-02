// core modules : 
// http  ====> Launch a server, send requests
//https  ====> Launch a SSL server i.e sends encrypted data 
//fs     ====>
//path   ====> 
//os     ====>

const http = require('http');

//one way

// function rqFunction(req, res){

// }

// http.createServer(rqFunction);

// another way

const server =  http.createServer(function(req,res){
        console.log(req);

        process.exit();
});

// http.createServer((req,res)=>{

// })

server.listen(3000);

// Node.js program lifecycle

// node index.js ===> start script ===> parse code, register variables & functions ===> Event Loop  ===> process.exit()

// Event loop ==> Keeps on running as long as there are event listeners registered