const Course = require('../Schemas/Course')
//Add Course
module.exports.Add=async(number,name,department)=>{
    const new_course=new Course({Number:number,Name:name,Department:department});
    const Data=new_course.save()
    .then(data=>{return data})
    .catch(err=>{return err})
    return Data;
}
module.exports.All_courses=async()=>{
return await Course.find({});
}