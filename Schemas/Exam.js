const mongoose = require('mongoose');
const Exam= new mongoose.Schema(
{
    ID:{type:Number,required:true,unique:true},
    Time:{type:Date,default:new Date()},
    RoomNumber:{type:mongoose.Schema.Types.ObjectId,ref:"Room",required:true}
})
module.exports=mongoose.model('Exam',Exam);