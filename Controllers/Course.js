const Room=require('../Services/Course')
//Add Course
module.exports.add_course=async(req,res)=>{
const Data=await Room.Add(req.body.Number,req.body.Name,req.body.Department)
res.json(Data);
}
//All Courses
module.exports.all_courses=async(req,res)=>{
const Data=await Room.All_courses();
if(Data.length!=0){
    res.json(Data)
}
else{
    res.json({Message:"NO Course Exist in Database!"})
}
}