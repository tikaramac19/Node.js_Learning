console.log("Higher order function in javascript")

// if you want to transform the whole array we can use map()  function
const arr = [3,4,7,2,9,7,5];

// transformation of the array eg.
// Double - [6,8,14,4,18,14,10]
//triple - [9, 12, 21, 6, 27, 21, 15]
    const triple = (y) =>{
        return y *3;
    }

    const outputTriple = arr.map(triple);

    console.log(outputTriple);


const output = arr.map((double, index)=>{ // doing like this is known as the higher order functions
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

// console.clear();

// transforming into the binary of the given array data

const binary = (z) => {
    return z.toString(2)  // comverting an array item into the binary number
}

const outputBinaray = arr.map(binary);

console.log(outputBinaray);


// Concept of filter() function 
// filter function is used to filter an values which is inside an array.
const addData = [4,2,7,1,2,3,2,7,3,9];

// filter odd values

const filterOutput = addData.filter((x) =>{
    return x % 2;
})

console.log(filterOutput);

const greaterValue = addData.filter((x)=>{
    return x >3;
})

console.log(greaterValue);

//remove the duplicate values
const duplicate = addData.filter((x, index) =>{
    return addData.indexOf(x) == index;
})

console.log(duplicate);


// reduce() method
// just like the name suggest reduce, actually it doesnot reduce anything haha

const reduceData = [4,6,3,8,3,5];

// so , we will itterate in this array data and find out the some of the item 
// or iterate in this each and every array element and find out the largest item or element among these.

// without using reduce()   method
// here we can find the sum of all the element present in the array
function find(arr){

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        
    }

    return sum

}

console.log(find(reduceData));


// using reduce () method

// in the callback function of the reduce method it take basically two 
// parameters called accumulator (acc) and current (curr);

// here curr is the current element in the array and acc means the accumulator which is an empty 
// variable whare we can store the sum of the elements
const reduceOutput = reduceData.reduce((acc, curr)=>{
    acc = acc + curr;

    return acc;
}, 0);

console.log(reduceOutput);

// Note: reduce() methods takes two arguments first one is callback function iteself and 
// another one is initial value of the accumulator (acc).

// finding the maxmum number inside the array (logic)

function findMax(arr){
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        
        if(arr[i] > max){
            max = arr[i];
        }
         
    }
    return max;
}

console.log(findMax(reduceData));

// example using reduce() method


const reduceOut = reduceData.reduce((acc, curr)=>{
        
    if(curr > acc){
        acc = curr;
    }
    return acc;
}, 0);

console.log(reduceOut);

// output should be 8

// reduce() method in javascript advance

const personInfo= [
    {
        name : "Bibash",
        age : 22
    },
    {
        name : "Anjal",
        age : 24
    },
    {
        name : "Ural",
        age : 23
    },
    {
        name : "Manish",
        age : 21
    }
]

const newInfo = personInfo.reduce(function(acc, curr){
        if(acc[curr.age]){
            acc[curr.age] = acc[curr.age] + 1;
        }
        else{
            acc[curr.age] =1 ;
        }

        return acc;
}, {})

console.log(personInfo);
console.log(newInfo);