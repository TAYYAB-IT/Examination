const Exam = require('../Controllers/Exam')
const router = require('express').Router()
router.post('/exam',Exam.Add_exam )
router.get('/exam',Exam.all_exams)
module.exports=router