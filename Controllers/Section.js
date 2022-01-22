const Section=require('../Services/Section')
const Exam=require('../Services/Exam')
const Course=require('../Services/Course')
//Add Course
module.exports.add_section=async(req,res)=>{
    const exam_data=await Exam.search(req.body.ExamID);
if(exam_data){
const course_data=await Course.search(req.body.CourseNumber);
if(course_data){
   const Data=await Section.add(req.body.Number,exam_data._id,course_data._id,req.body.Enrollment);
res.json(Data);
}
else{
    res.json(Message="Course Number Not Exist in Database!")
}
}
else{
    res.json(Message="Exam ID Not Exist in Database!")
}
}

//Show Section
module.exports.all_sections=async(req,res)=>{
    const Data=await Section.show_all();
    if(Data.length!=0){
        res.json(Data)
    }
    else{
        res.json(Message="No Section Exist in Database!")
    }
}