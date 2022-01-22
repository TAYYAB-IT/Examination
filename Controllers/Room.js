
const Room=require('../Services/Room');
//Add room
module.exports.Add_room=async(req,res)=>{
const Data= await Room.add(req.body.Number,req.body.Capacity,req.body.Building)
res.json(Data)
}
//show all rooms
module.exports.rooms_list=async(req,res)=>{
const Data=await Room.show_all();
if(Data.length!=0){
res.json(Data);}
else{
    res.json({Message:"No Room Exist in Database!"})
}
}
//Delete a Room
module.exports.delete=async(req,res)=>{
    const Data= await Room.delete(req.body.Number);
    if(Data){
        res.json({Data,Status:"Deleted"})
    }
    else{
        res.json(Message="NO Such Exam ID Exist!")
    }
}