var express=require('express')
const app=express();
app.listen(8080,function(req,res){
   console.log("sERVER sTARTED")
})
app.get("/",function(req,res){
    res.send("Welcome to xyz Company")
})
app.get("/emp",function(req,res){
    res.send("Employee Details")
})
app.get("/prd")