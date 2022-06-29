if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express');
const app = express();
const port = 8080;
const bcrypt = require('bcrypt'); // used to encrypt the original password
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')

const initializePassport = require('./passport-config')
initializePassport(passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
); // invoke passport-config function 



app.set("view-engine", "ejs"); // used for rendering html in server
app.use(express.urlencoded({extended:false}));
app.use(flash());
app.use(session({
    secret : process.env.SESSION_SECRET,
    resave : false,
    saveUninitialized : false
}))
app.use(passport.initialize());
app.use(passport.session())

const users = [];

app.get("/", (req, res)=>{
    res.render("index.ejs", {name: req.user.name});
})
// for login page
app.get("/login", (req,res)=>{
    res.render("login.ejs")
})
// post method for login 
app.post('/login', passport.authenticate('local', {
    successRedirect : '/',
    failureRedirect : '/login',
    failureFlash: true
}) )





// for register page
app.get("/register", (req,res)=>{
    res.render("register.ejs")
})

// post method for register
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