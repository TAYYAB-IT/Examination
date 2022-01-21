const Room =require('../Services/Room')
const Exam=require('../Services/Exam')
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
  const Data=await  Exam.Add(req.body.Id,time,room_data._id);
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