var express=require('Express')
const r=express.Router();
r.get("/",function(req,res){
    res.render("emphome")
})
module.exports=r