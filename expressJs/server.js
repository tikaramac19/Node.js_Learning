const express = require("express");
const { reset } = require("nodemon");
const app = express();
const port = 8080;



app.set('view engine', "ejs") // rendering html

app.get('/' , (req, res)=>{

    // console.log("worked");
    // res.status(200)
    // res.send("Hello there !")
    // res.download("server.js")

    // res.json({
    //     fname :"Tikaram",
    //     lname : "Acharya"
    // })

    res.render('index', {text :"World"})  // used to rendering html on the server ie. response

})



const userRouter = require("./routes/users");  // importing users router 

app.use('/users', userRouter); // linking a route to the particular path

app.listen(port, ()=>{
    // console.log(`server is starting at Port http://localhost:${port}`);
})
