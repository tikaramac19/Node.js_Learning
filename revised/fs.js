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
const { deepStrictEqual } = require('assert');

http.createServer(function(req, res){

    fs.readFile('2-names.js', (err, data)=>{
        // res.writeHead(200, {'Content-Type': 'text/html'})
        if(err) throw err;

        return res.end(data);
    })


}).listen(8080);


// Create Files

// The file system module has methods for creating new files:
    // fs.appendFile()
    // fs.open()
    // fs.writeFile()

    // The fs.appendFile() method appends specified content to a file. If the file does not exitst,
    // the file will be created

    fs.appendFile("demo.txt", 'Hello content !', function(err){
            if(err) throw err;

            console.log('File created !');
    });