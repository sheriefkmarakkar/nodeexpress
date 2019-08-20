var mongo=require('mongoose')
var schema=mongo.Schema;
var aSchema=new schema({
    url:String,name:String,bookn:String
})
var authormodel=mongo.model("modelname1",aSchema,'Author')

module.exports=authormodel;