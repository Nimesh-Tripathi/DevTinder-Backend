const express = require("express");
const connectDB = require("./config/Database")
const app = express();
const User = require("./models/user")

app.use(express.json())

app.post("/signUp", async (req, res) => {

    console.log(req.body);

    const userObj = {
        firstName : "Ishika",
        lastName : "Tripathi",
        email : "ishika@gmail.com",
        password : "ishika2007",
        age : 17 
    }

    // creating a new instance of the user model
    // const user = new User(userObj);
    const user = new User(req.body);

    await user.save();
    res.send("user added successfully")

})

connectDB().then(() => {
    console.log("Database connected successfully");
    app.listen(2004, () => {
        console.log("Server is running on port 2004");
    })
}).catch((err) => {
    console.log("database not connected");
})


// app.use("/admin", (req, res, next) => {

//     const token = "xyz";
//     const isAdminAuthorised = token === "xyz";

//     if (!isAdminAuthorised) {
//         res.status(401).send("unauthorized account")
//     }
//     else {
//         next();
//     }
// })

// app.get("/admin/getData", (req, res) => {
//     res.send("data recovered")
// })

// app.get("/admin/Delete", (req, res) => {
//     res.send("deleted the user")
// })



