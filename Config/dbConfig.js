const mongoose = require('mongoose')
require('dotenv').config()
const URL = process.env.dbUrl

mongoose.connect(URL)
.then(()=>{
    console.log('Database successfully connected');
})  
.catch((err)=>{
    console.log('Unable to connect to Database:',err.message);   
}) 