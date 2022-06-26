// This is the Built-in URL Module

// The URL Module splits up a web address into readable parts.
// To include the URL module, use the require() method.

let url = require('url');

// Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties.

// eg.
// Split a web address into readable parts.

let adr ='http://localhost:8080/default.htm?year=2017&month=february';

let q = url.parse(adr, true);

console.log(q.host); // it returns 'localhost:8080

console.log(q.pathname); // it returns /default.htm

console.log(q.search) // it returns ?year=2017&month=february

let qdata = q.query; // it returns an object:

console.log(qdata.year) // returns 2017

console.log(qdata.month); // it returns february

let addr2 = 'https://www.w3schools.com/nodejs/nodejs_url.asp';

let z = url.parse(addr2, true);

console.log(z.host); // it returns www.w3schools.com

console.log(z.pathname); // it returns /nodejs/nodejs_url.asp

console.log(z.search); // it returns null coz we didnt search anything 

// Node.js file server

// Now we know how to parse the query string, and in the previous chapter we learned how to make Node.js behave as a file server.
// Let us combine the two, and serve the file requested by the client.

// Create two html files and save them in the same folder as your UrlModule.js files.

// create a file that opens the requested file and returns the content to the client. If anyting goes 
// wrong , throw a 404 error.

let http = require('http');

let fs = require('fs');

http.createServer(function(req, res){

    let p1 = url.parse(req.url, true);

    let filename = "." + p1.pathname;

    console.log(p1.pathname);

    fs.readFile(filename, function(err, data){
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});

            return res.end("404 Not found");
        }

        res.writeHead(200, {'Content-Type': 'text/html'});

        res.write(data);

        return res.end();
    })


}).listen(8080);