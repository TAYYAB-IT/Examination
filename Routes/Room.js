const express=require('express');
const router=express.Router();
const Room=require('../Controllers/Room')
router.post('/room',Room.Add_room)
router.get('/room',Room.rooms_list)
router.delete('/room',Room.delete)
module.exports=router