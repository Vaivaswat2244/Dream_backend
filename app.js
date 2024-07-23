const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoute");
const userDetailsRoutes = require("./routes/userRoute");
const connectDB = require("./database/db");
const checkUser = require("./middleware/checkUser");
const cors = require("cors");

connectDB();

const app = express();
app.use("/auth", authRoutes);
app.get('/',(req,res)=>{
  res.send("Dream Running")
})

app.listen(7000, function () {
  console.log("Listening on port 7000");
});

