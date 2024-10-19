const express = require("express");

const app = express();

app.use("/",(req,res) => {
    res.send("hello")
})

app.use("/Nimesh", (req,res) => {
    res.send("hello sir")
})

app.listen(3000 , () => {
    console.log("Server is running");
});

