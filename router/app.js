var express=require('express')
const app=express();
var r=require('./routes/prdrouter')
app.set("view engine","ejs")
app.set("views","./src/views")
app.listen(5656,function(req,res){
   console.log("Server Started")
})
app.get("/",function(req,res){
    res.render("home")
})
app.use("/prd",r)
