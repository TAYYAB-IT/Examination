const Section=require('../Schemas/Section')
//Add Section
module.exports.add=async(number,exam_id,course_no,enrollment)=>{
    const new_section=new Section({Number:number,ExamID:exam_id,CourseNumber:course_no,Enrollment:enrollment});
    const Data=await new_section.save().then(data=>{
      
        return data;
    }).catch(err=>{
      return err;
    })
    ;
    return Data;
    }
  //All Sections
module.exports.show_all=async()=>{
const Data=await Section.find({}).populate('ExamID').populate('CourseNumber')
return Data;
}
//Search one Section
module.exports.search=async(section_no)=>{
  const Data=await Section.find({Number:section_no}).populate('ExamID').populate('CourseNumber')
  return Data[0];
}