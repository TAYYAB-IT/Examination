const mongoose = require('mongoose')
const Course=new mongoose.Schema({
    Number:{type:Number,required:true,unique:true},
    Name:{type:String,required:true,maxlength:255},
    Department:{type:String,required:true,maxlength:255}
})
module.exports = mongoose.model('Course',Course)