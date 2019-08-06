var ex=require('Express')
var bodyparser=require('body-parser')
const app=ex();
var products=[{pname="1",price:"1",qty:"1"},{pname="2",price:"f",qty:"2"},{pname="3",price:"3",qty:"3"},{pname="4",price:"4",qty:"4"}]
app.set("view engine","ejs")
app.set("views","./views")
app.use(bodyparser.urlencoded({extended:true}))
app.listen(8081,function(req,res){
    console.log("Server Started")

})
app.get("/new",function(req,res){
    res.render("npro")
})
app.get("/",function(req,res){
    res.render("home")
})
app.get("/npro",function(req,res){
    res.render("npro")
})
app.get("/added",function(req,res){
    res.render("added")
})
app.get("/delete",function(req,res){
    res.render("delete")
})
app.post("/viewproducts",function(req,res){
    res.render("viewp")
})