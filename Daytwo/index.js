let http = require('http');

const data1 = require("./api");
   const  {id, fname, lname, position} = data1;
   console.log(data1.fname);
   console.log(id);
http.createServer(function(req, res){
            // res.writeHead(200, {'Content-Type' : 'text/html'});
            // res.write("Response from server");

            res.write(`My fullname is ${fname} ${lname}.I am currently worked as a ${position}.`)
            res.end();
}).listen(8080);
 



