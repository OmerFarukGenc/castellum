require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const requestLoggerMiddleware = require("./middlewares/requestLogger");

mongoose.connect(process.env.DATABASE_URL)
app.use(express.json());
app.use(requestLoggerMiddleware);

app.get('/', (req, res) => {
  
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})