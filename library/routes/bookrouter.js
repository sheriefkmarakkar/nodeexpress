var ex=require('express')
const r=ex.Router();
var mongo=require('mongoose')
var url="mongodb://localhost/library";
var books=require('../model/bookmodel')
var barray=[{url:"https://images-na.ssl-images-amazon.com/images/I/51RKG3k-UAL._SX390_BO1,204,203,200_.jpg",btitle:"fhsd",genere:"sjah",author:"sdhfsj"},{url:"https://www.amazon.in/dp/9350293471/ref=gbph_img_m-2_ad85_9b249af5?pf_rd_p=fd64a0da-eef3-468c-88b4-a5eed68cad85&pf_rd_s=merchandised-search-2&pf_rd_t=101&pf_rd_i=976389031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_r=FQVTFY8Y8J97M276E37W.jpg",btitle:"jchas",genere:"jsdhs",author:"kdjfvgdk"}]

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
r.get("/addbook",function(req,res){

    res.render("bookadd",{pagetitle:"library",arr:[{link:"/books",title:"Books"},{link:"/author",title:"Author"},{link:"/books/addbook",title:"New book"}]})

    
    
})
r.get("/",function(req,res){
    books.find({},function(err,result){
     
        res.render("books",{pagetitle:"Books",barray:result,arr:[{link:"/books",title:"Books"},{link:"/author",title:"Author"}]})
    })
    
})
module.exports=r;