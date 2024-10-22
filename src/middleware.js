const express = require("express");

const app = express();

app.use("/admin",(req,res,next)=>{

    const token = "xyz";
    const isAdminAuthorised = token==="xyz";

    if(!isAdminAuthorised){
        res.status(401).send("unauthorized account")
    }
    else{
        next();
    }
})

app.get("/admin/getData",(req,res)=>{
    res.send("data recovered")
})

app.get("/admin/Delete",(req,res)=>{
    res.send("deleted the user")
})

app.listen(2004,()=>{
    console.log("Server is running on port 2004");
})