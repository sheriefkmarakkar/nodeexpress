var express=require('express')
var m=require('mongoose')
var bodyparser=require('body-parser')
const r=express.Router();
r.use(bodyparser.urlencoded({extended:true}));

var url="mongodb://localhost/emp1";
var emp=require('../model/empl')
var e2=new emp();
m.connect(url,function(err){
    if(err) throw err
    else{
        console.log("Database Connected")
    }
    })



r.get("/",function(req,res){
    res.render("emphome")
})



r.get("/newe",function(req,res){
    res.render("newemp1")
})



r.get("/view",function(req,res){
  
    emp.find({},function(err,result){
        if(err) throw err
        else
        {
            console.log(result);
            res.render("viewemp",{data:result})
        }
    })
})
 



r.post("/updatecode/:id",function(req,res){
       
       emp.update({eid:req.params.id},{$set:{name:req.body.name,salary:req.body.salary}},function(err){
        if(err)
        throw err
        else{
            res.send("updated")
        }
        })
       console.log("update")
       console.log(req.params.id)
      
    })

    
r.get("/edit/:id",function(req,res){
    emp.find({eid:req.params.id},function(err,result){
        if(err)
        throw err
        else{
            console.log(result);
            res.render("update",{emp:result})
        }
    })
})


    




r.post("/add",function(req,res){

   var e1=new emp();
   e1.eid=req.body.eid;
   e1.name=req.body.uname;
   e1.salary=req.body.salary;
   e1.save(function(err){
       if(err)
       throw err;
       else
       {
    
       
        console.log("Data Added")
        res.send("data added...")
       }
   });
   
})

module.exports=r