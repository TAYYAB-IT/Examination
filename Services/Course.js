const Course = require('../Schemas/Course')
//Add Course
module.exports.Add=async(number,name,department)=>{
    const new_course=new Course({Number:number,Name:name,Department:department});
    const Data=new_course.save()
    .then(data=>{return data})
    .catch(err=>{return err})
    return Data;
}
//All courses
module.exports.All_courses=async()=>{
return await Course.find({});
}
//Find one
module.exports.search=async(course_number)=>{
const Data=await Course.find({Number:course_number})
return Data[0];
}