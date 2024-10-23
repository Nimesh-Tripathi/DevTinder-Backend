const express = require("express");
const connectDB = require("./config/Database")
const app = express();
const User = require("./models/user")

app.use(express.json())


connectDB().then(() => {
    console.log("Database connected successfully");
    app.listen(2004, () => {
        console.log("Server is running on port 2004");
    })
}).catch((err) => {
    console.log("database not connected");
})


//posting data in db
// app.post("/signUp", async (req, res) => {

//     console.log(req.body);

//     const userObj = {
//         firstName : "Ishika",
//         lastName : "Tripathi",
//         email : "ishika@gmail.com",
//         password : "ishika2007",
//         age : 17
//     }

//     // creating a new instance of the user model
//     // const user = new User(userObj);
//     const user = new User(req.body);

//     await user.save();
//     res.send("user added successfully")

// })

// get one user from db
// app.get("/user", async (req, res) => {

//     const userEmail = req.body.lastName;

//     try {
//         const user = await User.find({ lastName: userEmail })
//         res.send(user)
//     } catch (error) {
//         res.status(404).send("Something went wrong")
//     }

// })

//get all data from db 
// app.get("/feed", async (req, res) => {

//     try {
//         const user = await User.find({})
//         res.send(user)
//     } catch (error) {
//         res.status(404).send("Something went wrong")
//     }

// })

//delete user by id
// app.delete("/del", async(req,res) => {

//     const id = req.body.userId;

//     try {
//         const ans =  await User.findByIdAndDelete(id)
//         res.send("user deleted successfully")
//     } catch (error) {
//         res.status(404).send("user not deleted")
//     }
// })

//update the user data
// app.patch("/update", async (req,res) => {
//     const id = req.body.userId;
//     const data = req.body;

//     try {
//         await User.findByIdAndUpdate({_id:id},data)
//         res.send("updated successfully")
//     } catch (error) {
//         res.status(404).send("not get updated")
//     }
// })
