var mongo=require('mongoose')
var schema=mongo.Schema;
var empSchema=new schema({
    eid:String,
    name:String,
    salary:int
})
var empmodel=mongose.model("emplo",empSchema)
//emplo is model name
module.exports=empmodel