var express=require('express')
var multer=require('multer')
var storage =   multer.diskStorage({  
    destination: (req, file, callback)=>{  
      callback(null, './uploads');  
    },  
    filename: (req, file, callback)=>{  
      callback(null, file.originalname);  
    }  
  });  
  var type = multer({ storage : storage}).single('image');

const app=express();

app.set("view engine","ejs")
app.set("views",)
app.listen(9090,function(req,res){
   console.log("Server Started")
})
app.get("/view/:image",function(req,res){
    res.sendfile(__dirname+"/image/"+req.params.image)
})
app.get("/",function(req,res){
    res.render("home")
})
app.get("/nbook",function(req,res){
    res.render("addbook")
})
app.post("/bookadd",type,function(req,res){
    res.send("Added")
})


