// Eents Module
// Node.js has a built-in module, called "events",
// where you can create-, fire-, and listen for your own events.

//Example 1 - Registering for the event to be fired only one time using once.
 
const EventEmitter = require('events');
// we can create our own event , we can fire that event and listen that event
const event = new EventEmitter();  // creating object

// define this callback function before we emit it otherwise it wont work properly
event.on("sayMyName", ()=>{
    console.log("Your name is Tikaram Ac");
});


 // creating new event and emit it  i.e emitting name events

// concept : emitter objects emit named events that cause previously registered listeners to be called. So , an emitter 
// object basically has two main features:
// Emitting name eents.
// Registering and unregistering listener functions.

// Example 2 - Create an event emitter instance and register a couple of callbacks
// in node js we can call multiple callbackfunctions using same event
event.on("sayMyName", ()=>{
    console.log("Your name is Prakash");
});
event.on("sayMyName", ()=>{
    console.log("Your lastname is Acharya");
});
event.on("sayMyName", ()=>{
    console.log("You live in Birendranagar Surkhet");
});

event.emit('sayMyName');

// after calling multiple callback function of an event we can do as many task only clicing once. so it is very useful 

// Example 3 - Registering for the event with callback parameters.

const EventEmit = require('events');

const eventttt = new EventEmit();


eventttt.on("click", ()=>{
    console.log("Click me");
})

eventttt.emit("click");