import * as express from "express";
class ExpressApp{
    app:express.Application;
    constructor(){
        this.app = express();
        this.app.listen(3000,'localhost',()=>{console.log("server started")})
    }
}

let myApp = new ExpressApp();
myApp.app.get('/',(req,res)=>{res.send("server is running")})

myApp.app.get('/task',(req:express.Request,res:express.Response)=>{res.send("this is new server")})

myApp.app.get('/getAlltodo',(req:express.Request,res:express.Response)=>{
    console.log(req.method);
    console.log(req.url);
    console.log(req.params);
    console.log(req.query);
    console.log(req.statusCode)
    res.send("get All API Called");
})

myApp.app.get('/getTodoBYId/:todoId/user/:userId',(req:express.Request,res:express.Response)=>{
    console.log(req.method);
    console.log(req.url);
    console.log(req.params);
    console.log(req.query);
    console.log(req.statusCode)
    res.send("get API by Id");
})