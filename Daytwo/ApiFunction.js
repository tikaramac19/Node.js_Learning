// Types of API functions in Node.js

// 1. Asynchronous, Non-blocking function

// What it means is that when Node.js will make a request for
//  data to the API, it will not get blocked till the data is received.

// 2. Synchronous, Blocking functions

// Contrary to asynchronous functions, synchronous functions act as blocking functions. What it means is that these functions will make 
// the calling system wait for a response.

//understand with example

// Synchronous function
const fs = require('fs'); // build in module for read file 

let data = fs.readFileSync("./file.json");
// console.log(typeof(data))
console.log("Below is the Data from synchronous function call");
console.log(data);

// Asynchronous function
let json = require("./file.json");
console.log(json);


fs.readFile("./file.json", function(err, data){
   if(err){
    //    throw err
       return console.log(err);
   }



   console.log("Below is the Data from Asynchronous function call");

//    console.log(data);

   processFile(data);

   
});

function processFile(data){
    console.log(data);
}