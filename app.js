const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoute");
const connectDB = require("./database/db");

connectDB();

const app = express();
app.use("/auth", authRoutes);
app.get('/',(req,res)=>{
  res.send("Dream Running")
})

app.listen(7000, function () {
  console.log("Listening on port 7000");
});

