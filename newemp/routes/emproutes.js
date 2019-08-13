var express=require('express')
var m=require('mongoose')
const r=express.Router();
var url="mongodb://localhost/empl";
var emp=require('../model/empl')
//r.use(bodyparser.urlencoded({extended:true})
mongoose.connect(url,function(err){
    if(err) throw err
    else{
        console.log("Database Connected")
    }
    })
r.get("/",function(req,res){
    res.render("emphome")
})
r.get("/new",function(req,res){
    res.render("newemp1")
})
r.get("/view",function(req,res){
    res.send("Employee Details")
    emp.find({},function(err,result){
        if(err) throw err
        else
        {
            console.log(result);
            res.render('viewemp',{data:result})
        }
    })
})
r.post("/add",function(req,res){
   var e1=new emp();
   e1.name("name");
   e1.id("e001")
   e1.salary(10000)
   e1.save();
})

module.exports=r