// fs module 

let fs = require('fs');

// readFile module is used to read the file and display on the console.
fs.readFile('file.txt', 'utf8', (err, data)=>{
    console.log(err, data)
}) 

console.log("This comes first.");