const mongoose = require('mongoose');
const Section= new mongoose.Schema(
{
    Number:{type:Number,required:true,unique:true},
    ExamID:{type:mongoose.Schema.Types.ObjectId,ref:"Exam"},
    CourseNumber:{type:mongoose.Schema.Types.ObjectId,ref:"Course"}
    ,Enrollment:{type:Number,required:true}
})
module.exports=mongoose.model('Section',Section);