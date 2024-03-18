const information = require('./information');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, my name is ${information.name} and I'm study in ${information.campus}`,
    e : "oO",
    T : "U "
}));