var ex=require('Express')
const r=ex.Router()
r.get("/",function(req,res){
    res.render("prdhome")
})
module.exports=r
