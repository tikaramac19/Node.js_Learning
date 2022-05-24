// Basic syntax of node.js or geting response from the server : Hello world


let http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!, Lets rock tiku');
}).listen(8080);

// Node.js Modules
// Consiter modules to be the same as javascript libraries.
// A set of functions you want to include in your application.

// Built-in Modules
// Node.js has a set of built-in modules which you can use without any further installation.
//eg http, asserts, dns, domain, path, http, https, os , fs , events , net , url, v8 , vm etc.


// How to include Modules.

// To include a module, use the require() function with the name of the module.
//eg

let dns = require('dns');
let vm = require('vm');

// The most important module is http which is used to create a server.

// let http = require('http');

// Now our application has access to the HTTP module, and is able to create a server.



// Path module

let path = require('path');

let fileName = path.basename('/DayOne/demo_modules.js');
let dirname = path.dirname('/DayOne/node.js');


console.log(fileName);
console.log(dirname);


// Create your own modules.

// we can create our own modules, and easily include them in our applications.

// we create a external seperate file for creating module. (firstModule.js)

// now we need to include and use the module in any of our node.js files


