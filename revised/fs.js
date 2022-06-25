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

// The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "waiting", the 
// specified file is opened for writing. If the file does not exist, an empty file is created:

fs.open("demo.txt", 'w', function(err, file){
    if(err) throw err;

    console.log('saved');
})


// The fs.writeFile() method replaces the specified file and content if it exists. If the file not exist
// a new file, containing the specified content, will be created:

fs.writeFile("MyNewFile.txt", "Hello there! this is new file.", function(err){
    if(err) throw err;

    console.log("new file created !");
});

// Update Files

// The file system module has methods for updating files:
// fs.appendFile()
// fs.writeFile()

// The fs.appendFile() method appends the specified content at the end of the specified file.

// The fs.writeFile() method replaces the specified file and content.

// Delete Files

// To delete a file with the file system module, use the fs.unlink() method.

// The  fs.unlink() method deletes the specified file:

fs.unlink("demo.txt", function(err){
    if(err) throw err;

    console.log('file deleted !');
})

// Rename Files

// To rename a file with the File system module, use the fs.rename() method.

// The fs.rename() method renames the specified file.

fs.rename("MyNewFile.txt", "MyNewRenameFile.txt" , function(err){
    if(err) throw err;

    console.log("File renamed successfully !");
})