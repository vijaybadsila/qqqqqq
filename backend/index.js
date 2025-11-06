const express=require("express")
const app=express();
const cors = require("cors");
const dotenv=require("dotenv");
const dbconnect = require("./database/dbconfig");
const router = require("./routes/data");
dotenv.config();
const PORT=process.env.PORT || 5000
app.use(express.json())
dbconnect();
app.use(
  cors({
    origin: "http://localhost:5173", // ✅ No trailing slash
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/api/v1",router)
app.listen(PORT,()=>console.log(`Server Started At Port Number ${PORT}`))
