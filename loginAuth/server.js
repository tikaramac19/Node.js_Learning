const express = require('express');
const app = express();
const port = 8080;
const bcrypt = require('bcrypt'); // used to encrypt the original password

app.set("view-engine", "ejs");

app.use(express.urlencoded({extended:false}));

const users = [];

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

app.post('/register', async(req,res)=>{
    
    try{
        const hashedPassword = await bcrypt.hash(req.body.password,10);

        users.push({
            id: Date.now().toString(),
            name : req.body.name,
            email: req.body.email,
            password: hashedPassword
        })

        res.redirect('/login');

    }catch{
        res.redirect('register');
    }
// console.log(users);

})

app.listen(port);