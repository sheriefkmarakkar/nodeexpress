var express=require('express')
const app=express();
app.get("/",function(req,res){

    res.send("Welcome To Node Server")
})
app.get("/books",function(req,res){
    res.send("Book Details")
})
app.get("/author",function(req,res){
    res.send("Details Of Author")
})
app.listen(8080,function(req,res){

    console.log("server Started");
})