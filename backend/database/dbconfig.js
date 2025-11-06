const mongoose=require("mongoose")
require("dotenv").config();
const dbconnect=()=>{
    mongoose.connect(process.env.DB_URL,{
    //     useNewurlParser:true,
    // useUnifiedTopology:true
    })
    .then(()=>console.log("Database Connected") )
    .catch((err)=>{
        console.log("Something Databse Error",err)
        process.emit(1);
    })
}
module.exports=dbconnect;