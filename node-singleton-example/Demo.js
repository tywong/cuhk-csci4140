var counter1 = require("./Counter");
var counter2 = require("./Counter");

console.log("Singleton? " + (counter1 === counter2));
console.log("Singleton? " + (require("./Counter") === require("./Counter")));