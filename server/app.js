require('dotenv').config()

const express = require('express');

const app = express();

const mongoose = require('mongoose');

require('./db/conn')

require('./models/productsSchema');

const DefaultData = require('./defaultdata')
const cors = require('cors');
//import router from router use router
const router = require('./routes/router');

app.use(express.json()); //our is in json 
app.use(cors()); //both fornt end or react port are diffrent so to prevent the error 
app.use(router);




const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

DefaultData();  //call out defualt data function to enter data inti database 