const mongoose = require("mongoose")
const connectDb = async () => {
    try {
      const response = await mongoose.connect(process.env.MONGODB_URI || "");
      console.log("Db Connected Successfully");
     
    } catch (error) {
      console.log(error);
    }
  };
  
  module.exports = connectDb;
  