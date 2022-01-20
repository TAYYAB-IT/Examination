const mongoose=require('mongoose')
const Connect_Database=async(DB_URL)=>{
try{
await mongoose.connect(DB_URL,{useNewUrlParser: true,useUnifiedTopology: true})
console.log("Database Connected.")
}
catch(err){
    console.log(err)
}
}
module.exports=Connect_Database