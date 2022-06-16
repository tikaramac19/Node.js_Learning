console.log("Higher order function in javascript")

// if you want to transform the whole array we can use map()  function
const arr = [3,4,7,2,9,7,5];

// transformation of the array eg.
// Double - [6,8,14,4,18,14,10]
//triple - []
// binary - [];

const output = arr.map((double, index)=>{
    return double * 2;
})

console.log(output);

// another way is simply pass the callback function on the map function

const doubleFunc=(x)=>{
    return x *2;
}
// it will run this function for each element in the array

const outputDemo = arr.map(doubleFunc)
console.log(outputDemo);

console.clear();