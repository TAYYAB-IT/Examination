const Exam = require('../Controllers/Exam')
const router = require('express').Router()
router.post('/exam',Exam.Add_exam )
router.get('/exam',Exam.all_exams)
router.get('/exam/room',Exam.SearchByRoomNumber)
router.get('/exam/time',Exam.SearchByTime)
router.get('/exam/course',Exam.SearchByCourseNumer)
router.delete('/exam',Exam.delete)
module.exports=router