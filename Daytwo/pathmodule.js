// About path module : which is used to find out the path of dir or file etc

let path = require('path');

let a1 = path.basename('Hellothere');

console.log(a1);

let a2 = path.dirname('./node_modules/anymatch/index.js');

console.log(a2);

let a3 = path.extname('./pathmodule.js');

console.log(a3);