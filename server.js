var fizzbuzz = require("ek_fb");
//var foo = require("foo");
var fs = require("fs");

console.log(fs.readFile);
fs.readFile("README.md", function(err, data) {
    console.log(data.toString());
})


console.log(fizzbuzz);
//console.log(foo);