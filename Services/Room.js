const Room=require('../Schemas/Room')
//Add Room
module.exports.add=async(number,capacity,building)=>{
const new_room=new Room({Number:number,Capacity:capacity,Building:building});
const Data=await new_room.save().then(data=>{
  
    return data;
}).catch(err=>{
  return err;
})
;
return Data;


}
//All Rooms
module.exports.show_all=async()=>{
  const rooms= await Room.find({});
  return rooms;
}
//Find Room
module.exports.search=async(room_number)=>{
  const Data= await Room.find({Number:room_number})
  return Data[0];
  }