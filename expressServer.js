"use strict";
exports.__esModule = true;
var express = require("express");
var ExpressApp = /** @class */ (function () {
    function ExpressApp() {
        this.app = express();
        this.app.listen(3000, 'localhost', function () { console.log("server started"); });
    }
    return ExpressApp;
}());
var myApp = new ExpressApp();
myApp.app.get('/', function (req, res) { res.send("server is running"); });
myApp.app.get('/task', function (req, res) { res.send("this is new server"); });
myApp.app.get('/getAlltodo', function (req, res) {
    console.log(req.method);
    console.log(req.url);
    console.log(req.params);
    console.log(req.query);
    console.log(req.statusCode);
    res.send("get All API Called");
});
myApp.app.get('/getTodoBYId/:todoId/user/:userId', function (req, res) {
    console.log(req.method);
    console.log(req.url);
    console.log(req.params);
    console.log(req.query);
    console.log(req.statusCode);
    res.send("get API by Id");
});
