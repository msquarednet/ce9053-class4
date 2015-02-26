var fizzbuzz = require("ek_fb");
var fs = require("fs");
var http = require("http");
var Mustache = require("mustache");

var server = http.createServer(function(req,res) {
    //res.end("howdy!!");
    var count = parseInt(req.url.substr(1));
    console.log(typeof count);
    console.log(fizzbuzz.generate(count));
    fs.readFile("index.html", function(err,data) {
        if (err) {
            res.end(err);
        } else {
            var model = {
                fbarr : fizzbuzz.generate(count),
                title : "Fizz Buzz : "+count
            }
            //var output = data.toString().replace("[thedata]", count);
            var output = Mustache.render(data.toString(), model)
            res.end(output);
        }
    })
}).listen(process.env.PORT);







// //var foo = require("foo");
// var fs = require("fs");

// console.log(fs.readFile);
// fs.readFile("README.md", function(err, data) {
//     console.log(data.toString());
// })


// console.log(fizzbuzz);
// //console.log(foo);