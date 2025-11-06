const mongoose=require("mongoose")
require("dotenv").config();
const dbconnect=()=>{
    mongoose.connect("mongodb://localhost:27017/EmpData",{
        
    //    useNewurlParser:true,
    //  useUnifiedTopology:true
    })
    .then(()=>console.log("Database Connected") )
    .catch((err)=>{
        console.log("Something Databse Error",err)
       process.exit(1);
    })
} 
module.exports=dbconnect;