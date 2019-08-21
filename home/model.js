var mongo=require('mongoose')
var schema=mongo.Schema;
var bSchema=new schema({
    name:String
})
var model=mongo.model("modelname",bSchema,'insert')

module.exports=model;