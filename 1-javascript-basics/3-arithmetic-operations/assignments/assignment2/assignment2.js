let speed = 50;
let kilometers = 120;

let totalMins = Math.floor((kilometers / speed) * 60);

let hours = Math.floor(totalMins / 60);
let minutes = totalMins % 60;

console.log(hours + " hours " + minutes + " minutes travel time.");
