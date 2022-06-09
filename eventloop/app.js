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


event.emit('sayMyName'); // creating new event and emit it  i.e emitting name events

// concept : emitter objects emit named events that cause previously registered listeners to be called. So , an emitter 
// object basically has two main features:
// Emitting name eents.
// Registering and unregistering listener functions.

// Example 2 - Create an eent emitter instance and register a couple of callbacks


// Example 3 - Registering for the event with callback parameters.

