// jshint esversion:6


const express = require("express");
const https= require("https");
const bodyParser = require("body-parser");
const app = express();



app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){

res.sendFile(__dirname+"/index.html");

});

app.post("/",function(req,res){

  const query =req.body.cityName;
  const apikey="8884d90e9500b839166571f2a14102fe";
  const unit = "degree";
  var url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&unit="+unit+"&id=2172797&appid=8884d90e9500b839166571f2a14102fe";
  https.get(url, function(response){



  response.on("data",function(data){
  const wheatheData=JSON.parse(data);
  const temp=wheatheData.main.temp;
  const wheatheDescription = wheatheData.weather[0].description;
  var text = "Temperature in "+query+" is "+ temp +" Degree celcius.";
  var text2="The weather is currently "+wheatheDescription;
  res.write("<p> "+ text2 +"<p>");
  res.write("<h1> "+ text +"<h2>");
  res.send();

  });

  });


});
// const query ="London";
// const apikey="8884d90e9500b839166571f2a14102fe";
// var url="https://api.openweathermap.org/data/2.5/weather?q=London&id=2172797&appid=8884d90e9500b839166571f2a14102fe";
// https.get(url, function(response){
//
//
// console.log(response);
// console.log(response.statusCode);
// response.on("data",function(data){
// const wheatheData=JSON.parse(data);
// const temp=wheatheData.main.temp;
// const wheatheDescription = wheatheData.weather[0].description;
// var text = "Temperature in Lond is "+ temp +" Degree celcius.";
// var text2="The weather is currently "+wheatheDescription;
// res.write("<p> "+ text2 +"<p>");
// res.write("<h1> "+ text +"<h2>");
// res.send();
//
// });
//
// });


app.listen(3000, function(){
  console.log("SERVER IS RUNNING ON PORT 3000");
});
