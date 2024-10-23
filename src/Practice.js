const express = require("express")
const connectDB = require("./config/Database")

const app = express();









connectDB().then(() => {
    console.log("connected to database");
    app.listen(1004,() => {
        console.log("server is running");
        
    })
}).catch(() => {
    console.log("Unable to connect to database")
})




// app.get("/user",(req,res) => {
//     res.send("Hello User")
// })

// app.get("/user/Data",(req,res) => {
//     res.send("Hello User Data")
// })

// app.use("/",(req,res) => {
//     res.send("HElloooo")
// })
