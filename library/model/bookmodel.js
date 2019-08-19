var mongo=require('mongoose')
var schema=mongo.Schema;
var bSchema=new schema({
    url:String,btitle:String,genere:String,author:String
})
var bookmodel=mongo.model("modelname",bSchema,'Books')

module.exports=bookmodel;