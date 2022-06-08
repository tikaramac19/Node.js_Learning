// alternative way of exporting and using or accessing modules.


// const items = ['item1' ,'item2'];
// const person = {
//     name: "bob",
// }
// example : in two ways

module.exports.items = ['item1' ,'item2']; // we can directly exports like this or

const person = {
    name: "bob",
}

module.exports.singlePerson = person; // singlePerson  is a  property
