const { response } = require('express');
const express = require('express');
const MongoClient = require("mongodb").MongoClient;

const app = express();

app.use(express.json());
var database;
app.get('/',(req,res) => {
    res.send('welcome to mongodb');
});

app.listen(8000,()=>{
    MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser:true},(error,result)=>{
        if(error) throw error
        database = result.db('test');
        console.log("it works");
    });
});