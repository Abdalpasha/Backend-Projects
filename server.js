var http = require('http');
function handler(req, res){
    res.statusCOde = 200;
    res.end("Hello World")
}
var server = http.createServer(handler);
server.listen(3000, callback);
function callback(){

    console.log("server ip up and running")
}
