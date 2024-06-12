const connectToMongoose = require("./db");
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());


connectToMongoose();

const port = 5000;

app.use(express.json());
app.get("/", (req, res)=>{
  res.send("Hello this is backend")
})
  
app.use('/api/auth', require('./routes/auth.js'));

app.listen(port, () => {
  console.log(`Successfully connected at: ${port}`);
});