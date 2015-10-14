var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dataSchema = new Schema({
	id:Number,
	name:{type:String,required:true,index:{unique:true}},
	surname:{type:String,required:false,index:{unique:false}},
})
module.exports = mongoose.model('users',dataSchema);