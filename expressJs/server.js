const express = require("express");
const { reset } = require("nodemon");
const app = express();
const port = 8080;

app.use(express.static("public"))  // rendering static files

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


// for users route
const userRouter = require("./routes/users");  // importing users router 

app.use('/users', userRouter); // linking a route to the particular path
app.use(logger);
// for posts route

const postRouter = require('./routes/posts'); // importing posts router

app.use('/posts', postRouter); // linking a route to the particular path

// Middleware
function logger(req,res, next){
    console.log(req.originalUrl)
    next()
}


app.listen(port, ()=>{
    // console.log(`server is starting at Port http://localhost:${port}`);
})
