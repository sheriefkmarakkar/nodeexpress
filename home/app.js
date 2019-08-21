const ex=require('Express')
var app=ex();
var mongo=require('mongoose')
var url="mongodb://localhost/library";
var m=require('./model')


var bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine","ejs")
app.set("views","./src/views")


app.listen(8080,function(req,res){
    console.log("server Started");
})
app.get("/",function(req,res){
    res.render("home")
})
mongo.connect(url,function(err){
    if(err)
    throw err
    
    else
    {
        console.log("DataBase Connected")
    }
})
app.post("/add",function(req,res){
   var m1=new m()
   m1.name=req.body.text1;
   m1.save(function(err){
       if(err)
       throw err
       else{
           console.log("Data Added")
       }
   })
})
