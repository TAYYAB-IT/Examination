
const Room=require('../Services/Room');
//Add room
module.exports.Add_room=async(req,res)=>{
const Data= await Room.add(req.body.Number,req.body.Capacity,req.body.Building)
res.json(Data)
}
//show all rooms
module.exports.rooms_list=async(req,res)=>{
const Data=await Room.show_all();
if(Data){
res.json(Data.length!=0);}
else{
    res.json({Message:"No Room Exist in Database!"})
}
}