const mongoose = require('mongoose');
const Exam= new mongoose.Schema(
{
    ID:{type:Number,required:true,unique:true},
    Time:{type:Date},
    RoomNumber:{type:mongoose.Schema.Types.ObjectId,ref:"Room"}
})
module.exports=mongoose.model('Exam',Exam);