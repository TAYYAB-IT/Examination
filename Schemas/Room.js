const mongoose = require('mongoose');
const Room= new mongoose.Schema(
{
    Number:{type:Number,unique:true,required:true}
    ,Capacity:{type:Number,required:true},
    Building:{type:String,required:true,maxlength:255}
}
)
module.exports = mongoose.model('Room', Room)