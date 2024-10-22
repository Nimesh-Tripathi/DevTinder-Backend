const express = require("express");

const app = express();

// app.get("/user",(req,res,next) => {
//     res.send("HEllo")
//     next();
// }) 

// app.get("/user",(req,res) => {
//     res.send("HEllo 2")
// })


app.use("/user", (req, res, next) => {
    console.log("first route handler is working");
    // res.send("hello")
    next();
}, (req, res ,next) => {
    console.log("Second route handler is working");
    // res.send("hello 2")
    next();
},(req, res) => {
    console.log("Third route handler is working");
    res.send("hello 3")
},(req, res) => {
    console.log("Fourth route handler is working");
    res.send("hello 4")
})

app.listen(2004, () => {
    console.log("Server is running");
});

