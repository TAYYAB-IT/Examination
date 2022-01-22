const Course=require('../Services/Course')
//Add Course
module.exports.add_course=async(req,res)=>{
const Data=await Course.Add(req.body.Number,req.body.Name,req.body.Department)
res.json(Data);
}
//All Courses
module.exports.all_courses=async(req,res)=>{
const Data=await Course.All_courses();
if(Data.length!=0){
    res.json(Data)
}
else{
    res.json({Message:"NO Course Exist in Database!"})
}
}
//Delete an Course
module.exports.delete=async(req,res)=>{
    const Data= await Course.delete(req.body.Number);
    if(Data){
        res.json({Data,Status:"Deleted"})
    }
    else{
        res.json(Message="NO Such Exam ID Exist!")
    }
}