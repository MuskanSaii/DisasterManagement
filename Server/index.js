const express = require("express");
const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");
const connectDb = require("./mongodb/dbConnect");

require('dotenv').config();

app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT_NUMBER || 4000;
connectDb()
app.get("/health",(req,res)=>{
  res.json({message:"The server is working Fine"}).status(200);

})
app.listen(PORT,()=>console.log(`https Server is listening on the ${PORT}`));