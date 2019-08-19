var ex=require('express')
const r=ex.Router();
//var mongo=require('mongoose')
//var url="mongodb://localhost/library";
//var books=require('../model/bookmodel')
var barray=[{url:"https://images-na.ssl-images-amazon.com/images/I/51RKG3k-UAL._SX390_BO1,204,203,200_.jpg",btitle:"fhsd",genere:"sjah",author:"sdhfsj"},{url:"https://images-na.ssl-images-amazon.com/images/I/41R2%2BRQULhL._SX314_BO1,204,203,200_.jpg",btitle:"jchas",genere:"jsdhs",author:"kdjfvgdk"},{url:"https://images-na.ssl-images-amazon.com/images/I/41yrM-8Y1lL._SX343_BO1,204,203,200_.jpg",btitle:"jchas",genere:"jsdhs",author:"kdjfvgdk"}]



r.get("/",function(req,res){
    res.render("books",{pagetitle:"Books",barray:barray,arr:[{link:"/books",title:"Books"},{link:"/author",title:"Author"},{link:"/books/add",title:"New Book"},{link:"/login",title:"Login"},{link:"/LogOut",title:"LogOut"}]})
})
r.get("/sp/:id",function(req,res){
    res.render("singlebook",{pagetitle:"Books",arr:[{link:"/books",title:"Books"},{link:"/author",title:"Author"},{link:"/books/add",title:"New Book"},{link:"/login",title:"Login"},{link:"/LogOut",title:"LogOut"}],barray:barray[req.params.id]})
})
r.get("/add",function(req,res){
    res.render("bookadd",{pagetitle:"Books",arr:[{link:"/books",title:"Books"},{link:"/author",title:"Author"},{link:"/books/add",title:"New Book"},{link:"/login",title:"Login"},{link:"/LogOut",title:"LogOut"}],barray:barray[req.params.id]})
})
module.exports=r;