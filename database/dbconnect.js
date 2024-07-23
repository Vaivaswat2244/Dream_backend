const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vaivaswat2244:KBx33dDnTlOo42Rc@dream.0gz8ole.mongodb.net/?retryWrites=true&w=majority&appName=DREAM"
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
