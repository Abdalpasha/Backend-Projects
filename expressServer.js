"use strict";
exports.__esModule = true;
var express = require("express");
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var ExpressApp = /** @class */ (function () {
    function ExpressApp() {
        this.mongourl = "mongodb://localhost:27017/mydb";
        //code to eshtablish a local server
        this.app = express();
        this.app.listen(3000, 'localhost', function () { console.log("server started"); });
        this.configBodyParser();
        this.connectDb();
    }
    ExpressApp.prototype.configBodyParser = function () {
        //code to view the Body
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({ extended: false }));
    };
    ExpressApp.prototype.connectDb = function () {
        //code to connect MongoDB
        var mongooseOption = { useNewUrlParser: true };
        mongoose.connect(this.mongourl, mongooseOption)
            .then(function (data) { return console.log("db connection success"); })["catch"](function (error) { console.log(error); console.log("Db connection failure"); });
    };
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
myApp.app.post('/createTodo', function (req, res) {
    console.log(req.body);
    res.send("Todo Created");
});
