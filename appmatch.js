var express=require('express')
const app=express();
app.listen(8080,function(req,res){
   console.log("sERVER sTARTED")
})
/*app.get("/",function(req,res){
    res.send("Welcome to xyz Company")
})
app.get("/emp",function(req,res){
    res.send("Employee Details")
})
app.get("/ab?cd1",function(req,res){
    res.send("Test Demo")
   
})
app.get("/ab*cd2",function(req,res){
    res.send("Test Demo3")
   
})
app.get(/a/,function(req,res){
app.get("/ab*cd2",function(req,res){
    res.send("Test Demo6") 
   

app.get("/.$fly$/",function(req,res){
    res.send("Test Demo7")
})*/
app.get("/books/poem",function(req,res){
    res.send("<html><body><h1>Poem<h1><body></html>")
    res.send("Malayalam Poem")
})
app.get("/",function(req,res){
    res.sendFile(__dirname+"/src/views/home.html")
})
app.get("/emp",function(req,res){
    res.sendFile(__dirname+"/src/views/emp.html")
})
app.get("/prd",function(req,res){
    res.sendFile(__dirname+"/src/views/prd.html")
})
app.get("/emp/pemp",function(req,res){
    res.sendFile(__dirname+"/src/views/pemp.html")
})
app.get("/emp/empd",function(req,res){
    res.sendFile(__dirname+"/src/views/empd.html")
})

app.get("/emp/pemp/:id",function(req,res){
    res.send("Selected Employee Is :"+req.params.id)
})

app.get("/prd/retail",function(req,res){
    res.sendFile(__dirname+"/src/views/retail.html")
})
app.get("/prd/wholesale",function(req,res){
    res.sendFile(__dirname+"/src/views/wholesale.html")
})