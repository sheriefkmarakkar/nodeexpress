var ex=require('express')
const r=ex.Router();
var authorarr=[{name:"sherief",books:"bdcvdc"},{name:"ashwin",books:"bdcvxscvdc"},{name:"ruben",books:"bzxczXdcvdc"}];

r.get("/",function(req,res){
    res.render("authors",{authorarr:authorarr,pagetitle:"Authors",arr:[{link:"/books",title:"Books"},{link:"/author",title:"Author"},{link:"/books/add",title:"New Book"},{link:"/login",title:"Login"},{link:"/LogOut",title:"LogOut"}]})
})
module.exports=r;