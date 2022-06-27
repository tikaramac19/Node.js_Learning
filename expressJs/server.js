const express = require("express");

const app = express();

const port = 8080;

app.get('/' , (req, res)=>{
    console.log("worked");

    res.send("Hello there !")
})



app.listen(port, ()=>{
    console.log(`server is starting at Port http://localhost:${port}`);
})
