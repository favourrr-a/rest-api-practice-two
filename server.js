const express = require ('express')
const app = express()

//declare a route.. we can have multiple routes

const about = require("./controllers/aboutController.js");
// …
app.use("/about", about);

app.listen(3000, ()=>{
    console.log("Node API app is running on port 3000 yayy")
})