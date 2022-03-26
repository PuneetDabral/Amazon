require('dotenv').config()
const express = require('express');

const app = express();

const moongoose = require('mongoose');

require('./db/conn')


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});