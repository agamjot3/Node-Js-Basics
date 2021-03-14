// Learn About Event Modules

const events = require("events");

let ev = new events.EventEmitter();

ev.on('my-event', (data)=>{
    console.log('Event: ' + data);
})


var a = ()=>{console.log("Event Fired Again with function in a variable");}
ev.emit('my-event', "Called emit method to fire my method");


ev.once('once', ()=>{
    console.log("Event that fires only once!!!");
})

ev.emit('once');
ev.emit('once');



ev.off('my-event', ()=>{
    console.log('Unregistered');
})