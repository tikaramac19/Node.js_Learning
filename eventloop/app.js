// Eents Module
// Node.js has a built-in module, called "events",
// where you can create-, fire-, and listen for your own events.

//Example 1 - Registering for the event to be fired only one time using once.
 

// Example 2 - Create an eent emitter instance and register a couple of callbacks


// Example 3 - Registering for the event with callback parameters.

const EventEmitter = require('events');
// we can create our own event , we can fire that event and listen that event
const event = new EventEmitter();  // creating object

event.on("sayMyName", ()=>{
    console.log("Your name is Tikaram Ac");
})



event.emit('sayMyName'); // creating new event and emit it 