// GLOBALS - NO WINDOW
// in node there is no window coz there is no browser 

// __dirname = path to current directory
// __filename = file name
// require = function to use modules (Common Js)
// module = infor about current module (file)
// process = info about env where the program is being executed

  console.log(__dirname); // it will give the directory name 

    // setInterval(() => {
    //     console.log("Hello There");
    // }, 1000);

    setTimeout(() => {
        console.log("I am timeout build in method.")
    }, 5000);

  console.log(__filename); // it will give the filename

// tips: we dont need to write everytime node app.js , we can simply write  node app it will work

// Modules

// normal ways of  creating and calling a function 
const Dimaria = "Anjal";
const wick = "Prashant";

const sayHi = (name) =>{
    console.log(`Hello there, ${name}`)
}

sayHi('Ural');
sayHi(Dimaria);
sayHi(wick);

// modules made an file well structured 

// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)

// access module 

const fullInfo = require('./2-names');
console.log(fullInfo);

// here we can destructure like : 
// const {fname,lname,bage,position} = require('./2-names');
// or access like this into the function : fullInfo.fname, fullInfo.position etc.

const balenInfo = require('./3-balenfunction');
// console.log(balenFunc);

// destructuring may be the best option to access the module objects.

balenInfo(fullInfo.fname, fullInfo.lname, fullInfo.bage, fullInfo.position); // information about balen
// balenInfo(); // information about harka sampang


// accessing data from the module i.e alternative.js file

const data = require('./4-alternative');

const {array, object} = data;

console.log(data); // this will shown in the format of object called all the modules are actually a object.

// console.log(array);  result: undefined

// console.log(object);   result: undefined