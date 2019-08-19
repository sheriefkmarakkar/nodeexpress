var express=require('express')
const app=express();
var r=require('./routes/emproutes')
app.set("view engine","ejs")
app.set("views","./src/views")
app.listen(9090,function(req,res){
   console.log("Server Started")
})
app.get("/",function(req,res){
    res.render("emphome")
})
app.use("/emp",r)

