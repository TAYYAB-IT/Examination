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
const Data=await Section.find({}).populate({path:'ExamID',populate:{path:'RoomNumber'}}).populate('CourseNumber')
return Data;
}
//Search one Section
module.exports.search=async(section_no)=>{
  const Data=await Section.find({Number:section_no}).populate({path:'ExamID',populate:{path:'RoomNumber'}}).populate('CourseNumber')
  return Data[0];
}

//Delete one
module.exports.delete=async(section_no)=>{
  const Data=await Section.findOneAndDelete({Number:section_no}).populate({path:'ExamID',populate:{path:'RoomNumber'}}).populate('CourseNumber')
  return Data;
}

//Search Sections(Exam) By Course Number
module.exports.SearchbyCourseNo=async(course_no)=>{
  const Data=await Section.find({}).populate({path:'ExamID',populate:{path:'RoomNumber'}}).populate('CourseNumber')
const Filter_Data=Data.filter((value)=>value.CourseNumber.Number==course_no).map((value)=>value.ExamID)
  return Filter_Data;
}