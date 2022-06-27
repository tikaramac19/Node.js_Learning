const express = require('express');
const app = express();
const port = 8080;
app.set("view-engine", "ejs");


app.get("/", (req, res)=>{
    res.render("index.ejs");
})
// for login page
app.get("/login", (req,res)=>{
    res.render("login.ejs")
})

app.post('/login', (req,res)=>{
    
})





// for register page
app.get("/register", (req,res)=>{
    res.render("register.ejs")
})



app.listen(port);