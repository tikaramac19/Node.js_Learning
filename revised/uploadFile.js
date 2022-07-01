// Node JS Upload file 

// The Formidable Module

// There  is a very good module for working with file uploads , called "Formidable".

// THe Formidable module can be downloaded and installed using npm.

// npm install formidable

// After you have downloaded the module, you can include the module in any application you want.

let formidable = require('formidable');


// Upload files

// step 1: create an upload form
// create a Node.js file that writes and Html form , with an upload field.

// Code to produce and html form

let http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});

    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');

    res.write('<input type="file" name="filetoupload"><br>');

    res.write('<input type="submit">');

    res.write('</form>');

    return res.end();
}).listen(8080);


// step 2: Parse the uploaded file
// Include the formidable module to be able to parse the uploaded file once it reaches the server.

// when the file is uploaded, it gets placed on a temporary folder on you computer.

