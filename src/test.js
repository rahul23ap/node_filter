const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Define an event handler function
function onMyEvent() {
  console.log('Custom event was triggered!');
}

// Register the event handler for a custom event
myEmitter.on('customEvent', onMyEvent);

// Emit the custom event
myEmitter.emit('customEvent');
myEmitter.emit('customEvent');
myEmitter.emit('customEvent');



//const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Define a listener function for the 'greet' event
eventEmitter.on('greet', (name) => {
 // console.log(`Hello, ${name}!`);
    if(name == 'insert'){
        console.log('Hey '+name) ;   
    }
    if(name == 'email'){
        console.log('Hey '+name) ;   
    }

});

// Emit the 'greet' event
eventEmitter.emit('greet', 'insert');
eventEmitter.emit('greet', 'email');
