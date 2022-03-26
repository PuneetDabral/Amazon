const moongoose = require('mongoose');

const DB=process.env.DATABASE;

moongoose.connect(DB).then(()=>console.log('DB connected')).catch(err=>console.log(err));