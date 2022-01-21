const Exam=require('../Schemas/Exam');
//Add Exam
module.exports.Add=async(id,time,room_no)=>{
    const new_exam=new Exam({ID:id,Time:time,RoomNumber:room_no})
    const Data=new_exam.save()
    .then(data=>{return data})
    .catch(err=>{return err})
    return Data;
}
//All Exams
module.exports.all_exams=async()=>{
const Data=await Exam.find({}).populate('RoomNumber')
return Data
}
//Search
module.exports.search=async(exam_id)=>{
const Data=await Exam.find({ID:exam_id});
return Data[0];
}