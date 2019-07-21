import * as express from "express";
import * as bodyparser from "body-parser";
import * as mongoose from "mongoose";


class ExpressApp {
    app: express.Application;
    mongourl: string = "mongodb://localhost:27017/mydb"
    constructor() {
        //code to eshtablish a local server
        this.app = express();
        this.app.listen(3000, 'localhost', () => { console.log("server started") });
        this.configBodyParser();
        this.connectDb();
    }

    private configBodyParser(){
        //code to view the Body
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({extended:false}));
    }
    private connectDb(){
        //code to connect MongoDB
        let mongooseOption : mongoose.ConnectionOptions = {useNewUrlParser : true}
        mongoose.connect(this.mongourl,mongooseOption)
        .then((data) => console.log("db connection success"))
        .catch(error => {console.log(error);console.log("Db connection failure")})
    }

}

let myApp = new ExpressApp();
myApp.app.get('/', (req, res) => { res.send("server is running") })

myApp.app.get('/task', (req: express.Request, res: express.Response) => { res.send("this is new server") })

myApp.app.get('/getAlltodo', (req: express.Request, res: express.Response) => {
    console.log(req.method);
    console.log(req.url);
    console.log(req.params);
    console.log(req.query);
    console.log(req.statusCode)
    res.send("get All API Called");
})

myApp.app.get('/getTodoBYId/:todoId/user/:userId', (req: express.Request, res: express.Response) => {
    console.log(req.method);
    console.log(req.url);
    console.log(req.params);
    console.log(req.query);
    console.log(req.statusCode)
    res.send("get API by Id");
})
myApp.app.post('/createTodo', (req: express.Request, res: express.Response) => {
    console.log(req.body)
    res.send("Todo Created")
})