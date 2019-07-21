const http = require("http");
const url = require("url");

const httpserver = http.createServer(function(req,res){
    console.log ("server started")
    res.end("Hello world");
    var parseurl =  url.parse(req.url,true);
    console.log(req.method);
    console.log(req.url);
    console.log(parseurl.params);
    console.log(parseurl.query);
    console.log(parseurl.body);
    });
httpserver.listen(3000,function(){console.log("server started on port 3000")})