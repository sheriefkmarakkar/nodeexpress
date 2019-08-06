var express=require('express')
var bodyparser=require('body-parser')
var array=[{name:"sherief",author:"sshfh",price:"sdas"},{name:"sherief",author:"sshfh",price:"sdas"},{name:"sherief",author:"sshfh",price:"sdas"}]
const app=express();
app.set("view engine","ejs")
app.set("views","./views")
app.use(bodyparser.urlencoded({extended:true}))
app.get("/",function(req,res){
    res.render("loginp")

    

}) 
app.listen(8080,function(req,res){
    console.log("sERVER sTARTED")
})
app.get("/home/books",function(req,res){
    res.render("books",{books:array})
})
app.post("/home",function(req,res){
    if(req.body.pass=="12345")
    {

        res.render("home",{user:req.body.uname})
    
    console.log(req.body.uname)

    }
    else
    {
        res.redirect("/")
    }
})