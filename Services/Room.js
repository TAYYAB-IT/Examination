const Room=require('../Schemas/Room')
//Add Room
module.exports.add=async(number,capacity,building)=>{
const new_room=new Room({Number:number,Capacity:capacity,Building:building});
const message= await new_room.save((err,res)=>{
    if(err){
    return err;
    }
    else{
        return res;
    }
});
return message;

}
//All Rooms
module.exports.show_all=async()=>{
  const rooms= await Room.find({});
  return rooms;
}