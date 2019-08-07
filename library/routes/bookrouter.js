var ex=require('express')
const r=ex.Router();
r.get("/",function(req,res){
    res.render("books",{pagetitle:"Books",arr:[{link:"/books",title:"Books"},{link:"/author",title:"Author"}],barray:barray})
})
module.exports=r