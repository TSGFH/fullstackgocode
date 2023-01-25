import express from "express";
import cors from 'cors';
import { Data } from "./data/Data.js";
const MongoClient = require("mongodb").MongoClient;

const app = express();

app.use(express.json());
app.use(cors());
var database;
app.get('/api/calculator', async (req,res)=>{
    res.send({message:"the asnwer is 10"});
});

app.post('/api/test/testsupa', async (req,res)=>{
    const example = {id:5, title:"supatest",};
    const todo = {...req.body}

    Data.push(todo);
    console.log(Data);
    res.send(Data);
});

app.listen(8000, ()=>{
    console.log("i am listening on port 8000");
    MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser:true},(error,result)=>{
        if(error) throw error
        database = result.db('test');
        console.log("it works");
    });
});