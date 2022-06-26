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

