var ex=require('express')
const ur=ex.Router();
var mongo=require('mongoose')
var url="mongodb://localhost/library";
var usermodel=require('../model/usermodel')

mongo.connect(url,function(err){
    if(err)
    {
        throw err;
    }
    else
    {
        console.log("DataBase Connected")
    }
})
ur.post("/adduser",function(req,res){

    var u1=new usermodel();
    u1.uname=req.body.uname;
    u1.pass=req.body.pass;
    u1.role=req.body.role;
    u1.save(function(err){
        if(err)
        throw err
        else{
            res.redirect("/")
        }
    })
})
ur.post("/login",function(req,res){
    
    usermodel.find({uname:req.body.uname,pass:req.body.pass},function(err,result){
        if(err)
        {
         
        throw err
        }
        else if(result.length==0)
        {
            //alert("Check Your Data")
            res.redirect("/")
            
        }
        else
        {
            
          //res.send("Login Successfully Completed") 
          res.redirect("/index")
        }
    })
})
ur.get("/signup",function(req,res){
    res.render("Signup",{pagetitle:"Sign Up",arr:[{link:"/books",title:"Books"},{link:"/author",title:"Author"}]})
})
ur.get("/",function(req,res){
    books.find({},function(err,result){
     
        res.render("books",{pagetitle:"Books",barray:result,arr:[{link:"/books",title:"Books"},{link:"/author",title:"Author"}]})
    })
    
})
module.exports=ur;