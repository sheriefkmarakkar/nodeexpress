var express=require('express')
const app=express();
app.get("/",function(req,res){

    res.send("Welcome To Node Server")
})
app.listen(8080,function(req,res){

    console.log("server Started");
})