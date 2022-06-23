// The Node.js file system module allows you to work with the file system on our computer.

// To include the file system module, use the require() method.

// let fs = require('fs');

// console.log(fs);

// common use of the file system module.

// . Read files 
// . create files
// update files
// Delete files 
// Rename file

// Read Files
// : The fs.readFile() method is used to read files on our computer 

// Assume we have the  some other files located in the same folder as fs.js

let http = require('http');
let fs = require('fs');

http.createServer(function(req, res){

    fs.readFile('2-names.js', (err, data)=>{
        // res.writeHead(200, {'Content-Type': 'text/html'})
        if(err) throw err;

        return res.end(data);
    })


}).listen(8080);
