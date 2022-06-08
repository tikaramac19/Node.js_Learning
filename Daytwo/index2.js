let http = require("http");
let data2 =require("./api");

console.log(data2);
// let module = require("./api");

// let {id, firstname, lastname, position2} = module;

// console.log(module.firstname);
let {fname, lname, position} = data2;
http.createServer(function(req, res){
        res.write("Hello there");
        res.write(`MY friend name is ${fname} ${lname}.`);
        res.end();
}).listen(8080);    
