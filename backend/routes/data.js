const express=require("express");
const { CreateData } = require("../controllers/CreateData");
const { getdata } = require("../controllers/getdata");
const { deleteData } = require("../controllers/delete");
const router=express.Router();


router.post("/Add",CreateData)
router.get("/",getdata)
router.delete("/delete/:id",deleteData)

module.exports=router;