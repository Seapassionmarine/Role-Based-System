const express = require('express')
const router = require('./Router/userRouter')

require('./Config/dbConfig')

const app = express();


app.use(express.json()) 
app.use('/api/v1/user',router)
const PORT = process.env.PORT || 2007; 

app.listen(PORT,()=>{    
    console.log(`Server listening to PORT:${PORT}`); 
})

app.get("/",(req,res)=>{
    res.status(200).json({
        message:`Welcome to my HomePage`
    })
})