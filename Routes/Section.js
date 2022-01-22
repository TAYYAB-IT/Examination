const Section=require('../Controllers/Section')
const router = require('express').Router();
router.post('/section',Section.add_section )
router.get('/section',Section.all_sections )
router.delete('/section',Section.delete)
module.exports=router;