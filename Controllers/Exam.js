const Room =require('../Services/Room')
const Exam=require('../Services/Exam');
const { status } = require('express/lib/response');
//Add Exam
module.exports.Add_exam =async(req,res)=>{
const room_data=await Room.search(req.body.RoomNumber);
if(room_data){
    if(!req.body.time){
        time=new Date();
    }
    else{
        time=req.body.Time;
    }
  const Data=await  Exam.Add(req.body.ID,time,room_data._id);
  res.json( Data);
}
else{
    res.json(Message="This given room Number don't exist!")
}
}

//All_Exams
module.exports.all_exams =async(req,res)=>{
const Data=await Exam.all_exams();
if(Data.length!=0){
    res.json(Data)
}
else{
    res.json(Message="No Exam Exist in Database")
}
}
//Search Exam By RoomNumber
module.exports.SearchByRoomNumber=async(req,res)=>{
    const Data=await Exam.search_By_room_no(req.body.RoomNumber);
    if(Data.length!=0){
        res.json(Data)
    }
    else{
        res.json(Message="No Exam is registerd in this room");
    }
}
//Search By time 
module.exports.SearchByTime=async(req,res)=>{
    const Data=await Exam.search(req.body.ID,req.body.Time)
    if(Data && !req.body.ID)
    res.json(Data)
    else{
        res.json(Message="No Exam is Registered with this time.")
    }
}
//Delete an Exam
module.exports.delete=async(req,res)=>{
    const Data= await Exam.delete(req.body.ID);
    if(Data){
        res.json({Data,Status:"Deleted"})
    }
    else{
        res.json(Message="NO Such Exam ID Exist!")
    }
}

//All Exams of a Course No:
const Course_Exams=require('../Services/Section').SearchbyCourseNo
module.exports.SearchByCourseNumer=async(req,res)=>{
const Data=await Course_Exams(req.body.CourseNumber);
if(Data.length!=0){
    res.json(Data)
}
else{
    res.json(Message="NO Exam is registered with this Course Number")
}
}