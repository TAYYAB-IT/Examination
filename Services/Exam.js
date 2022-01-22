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
//Search one
module.exports.search=async(exam_id,time)=>{
    var Data=[]
if(exam_id){
    Data=await Exam.find({ID:exam_id}).populate('RoomNumber')}
else if(time){
    Data=await Exam.find({Time:time}).populate('RoomNumber')}
return Data[0];
}


//Delete one
module.exports.delete=async(exam_id)=>{
    const Data=await Exam.findOneAndDelete({ID:exam_id}).populate('RoomNumber')
    return Data;
}
//Find By Room No
module.exports.search_By_room_no=async(room_no)=>{
    const Data=await Exam.find({}).populate('RoomNumber')
   const Filter_Data=Data.filter((value)=>value.RoomNumber.Number==room_no)
    return Filter_Data;
}