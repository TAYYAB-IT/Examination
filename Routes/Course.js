const { route } = require('express/lib/application');
const Course = require('../Controllers/Course')
const router=require('express').Router();
router.post('/course',Course.add_course )
router.get('/course',Course.all_courses)
router.delete('/course',Course.delete)
module.exports = router;