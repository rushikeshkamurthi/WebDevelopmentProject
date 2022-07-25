// jshint esversion:6
const express = require("express");
const bodypaser= require("body-parser");
const app=express();

app.use(bodypaser.urlencoded({extended: true}));

app.listen(3000,function(){
console.log("SERVER STARTED");
});

app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html");
});


app.post("/",function(req,res){
  var num1= Number(req.body.num1);
  var num2=Number(req.body.num2);
  var n = num1+num2;

  res.send("<h1>thanks for submission</h1>  <br> solution is"+ n);
});
