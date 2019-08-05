var express=require('express')
const app=express();
app.get("/",function(req,res){
    res.send("Login Page")

}) 
app.listen(8080,function(req,res){
    console.log("sERVER sTARTED")
})