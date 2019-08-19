const ex=require('Express')
var app=ex();
var r=require('./routes/bookrouter')
var r2=require('./routes/authorrouter')
var barray=[{url:"https://images-na.ssl-images-amazon.com/images/I/51RKG3k-UAL._SX390_BO1,204,203,200_.jpg",btitle:"fhsd",genere:"sjah",author:"sdhfsj"},{url:"https://www.amazon.in/dp/9350293471/ref=gbph_img_m-2_ad85_9b249af5?pf_rd_p=fd64a0da-eef3-468c-88b4-a5eed68cad85&pf_rd_s=merchandised-search-2&pf_rd_t=101&pf_rd_i=976389031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_r=FQVTFY8Y8J97M276E37W.jpg",btitle:"jchas",genere:"jsdhs",author:"kdjfvgdk"}]
const chalk=require('chalk')
    const path=require('path')
app.set("view engine","ejs")
app.set("views","./src/views")
var id;
app.use("/books",r);
app.use(ex.static(path.join(__dirname,"/public")))
app.listen(8080,function(req,res){
    console.log("server "+chalk.red("Started"));
})
app.get("/login",function(req,res){
    res.send("Login")
})
app.get("/logOut",function(req,res){
    res.send("LogOut")
})
app.get("/",function(req,res){
    res.render("index",{pagetitle:"library",arr:[{link:"/books",title:"Books"},{link:"/author",title:"Author"},{link:"/books/add",title:"New Book"},{link:"/login",title:"Login"},{link:"/LogOut",title:"LogOut"}]})
    //res.sendfile(__dirname+"/src/views/index.html")
})

app.use("/author",r2)
