var mongo=require('mongoose')
var schema=mongo.Schema;
var empSchema=new schema({
    eid:String,
    name:{type:String},
    salary:Number
})
var empmodel=mongo.model("emplo",empSchema,'emp')
//emplo is model name,empschema
module.exports=empmodel