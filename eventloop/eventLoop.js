// About Event loops
// The Heart of NODE.JS : The event Loop

// components of Browser

// 1. first one is RUNTIME or (runtime)
// all the browsers have their own runtime for eg. chrome - v8 engine
// these runtime are single - therated i.e they only do one works at a time.

// 2. CallStack
// call stack is like an array. 
// demo example

console.log( 'start');

function multiply (a , b){
    console.log(a * b);
}

function start(){
    multiply(2 , 2);
}

start();

// 3. Heap
// all the variables we declared are stored in the memories that's called heap.

// 4. WebAPI
// Ajax, setTimeout, DOM

// Task Queue
// the callback are stored into the task queue

// 5. Event Loop
// event loop looks up on task queue and call stack
// if there is any callbacks on the task queue and at the same the call stack is empty 
// then event loop takes that callback and put it into the call stack.
// node: it will done only when the callstack will empty otherwise it will not happen.

console.log('start');

setTimeout(function cb(){
    console.log('cb');
}, 3000);

console.log('End');