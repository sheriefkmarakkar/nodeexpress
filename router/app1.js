var ex=require('Express')
const app=ex();
app.set("View engine","ejs")
app.use("Views","./src/views")
var r=require('./routes/prdrouter')

app.listen(2323,function(req,res){
    console.log("Starting Server");

})
app.use("/prd",r)
app.get("/",function(req,res){
    res.render("home")
})
app.use("/emp",emprouter)