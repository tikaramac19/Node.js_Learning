// demo http modules.

// Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text transfer portocol

let http = require('http');

// Node.js as a web server
// The HTTP module can create an http server that listens to  server ports and gives a response back to the client.

// use the createServer() method to create an HTTP server.

// create a server object.

http.createServer(function(req, res){

    res.writeHead(200, {'Content-Type': 'text/html'}); // this is called http - header

    res.write('This is response comming from the server.'); // write a response to the client.

    res.end(); // end the response

}).listen(8080); // the server object listens on port 8080

// NOTE: The function passed into the http.createServer() method, will be executed when someone
// tries to access the computer on port 8080


// Add an HTTP Header.
// if the response from the HTTP server is supposed to be displayed as HTML, you should include an 
// ... HTTP header with the correct content type.

// eg. res.writeHead(200, {'Content-Type': 'text/html'}); 

// The first argument of the res.writeHead() method is the status code, 200 means tha all is OK,
// the second argument is an object containing the response headers.