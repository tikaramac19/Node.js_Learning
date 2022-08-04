const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config({path: ".env"});
const PORT = process.env.PORT || 8080;

app.use("/", (req,res)=>{
    res.send("server started !");
})



app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})