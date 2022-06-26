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