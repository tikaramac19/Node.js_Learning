// About path module : which is used to find out the path of dir or file etc

let path = require('path');

let a1 = path.basename('Hello there');

// console.log(a1);

// let a2 = path.dirname('./node_modules/anymatch/index.js');

// console.log(a2);

// let a3 = path.extname('./pathmodule.js');

// console.log(a3); 

let fs = require("fs") // fs module

let filesystem = fs.readFileSync("./file.txt");  // example of synchronous file read

console.log(filesystem); 
// somefunction()  // this will run only afteer console.log


// example of asynchronous file read 

fs.readFile("./file.txt", (err, data)=>{
        // console.log(data);
       if(!err){
           console.log(data);
       }
       else{
           throw err;
       }
})




