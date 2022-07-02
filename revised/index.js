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

// const server =  http.createServer(function(req,res){
        // console.log(req);

        // process.exit(); : Basically hard exited our events loop and therefore the program shuts down because there
        // was no more work to do.
// });

// http.createServer((req,res)=>{

// })

// server.listen(3000);

// Node.js program lifecycle

// node index.js ===> start script ===> parse code, register variables & functions ===> Event Loop  ===> process.exit()

// Event loop ==> Keeps on running as long as there are event listeners registered


// Understanding request object

const server2 = http.createServer((req,res)=>{

    // handle request and read some data from the requests like req.url, req.methods etc
    console.log(req.url)
    console.log(req.method)
    console.log(req.headers)

    res.setHeader('Content-Type', 'text/html');

    res.write('<html>')
    res.write('<head> <title> First Page </title> </head>');
    res.write('<body> <h3> Hi There ! </h3> </body>');
    res.write('</html>');

    res.end();
})

server2.listen(3000);

