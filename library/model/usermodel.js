var mongo=require('mongoose')
var schema=mongo.Schema;
var uSchema=new schema({
    uname:String,pass:String,role:String
})
var usermodel=mongo.model("modelname2",uSchema,'user')

module.exports=usermodel;