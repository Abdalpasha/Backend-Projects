var http = require('http');
var server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.header);
    if (req.url == '/api/task') {
        res.statusCode = 200;
        res.write(JSON.stringify({ id: 1, msg: "Book Tickets" }));
        res.end()
    } else {
        res.statusCode = 200;
        res.write("Hello World");
        res.end()
    }
})
server.listen(3000, () => { console.log("server is up and running") })