import express from "express";
import bodyParser from "body-parser";
import apiRouter from './routes/api';
const app = express();
//test
const port = 3000;
app.use(bodyParser.json());
app.use('/api', apiRouter);
app.listen(port,()=>{
    console.log(`server is Running on port ${port}`);
})