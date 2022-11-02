if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const router = require("./server/routes/routes");
const path = require("path");
const initializePassport = require("./passport-config");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");
const mongoose = require('mongoose');

// importing birth schema from model
const Birth = require('./server/model/birthSchema')

// importing connection 
const connectDB = require('./server/database/conn');

// calling database connectiondb
connectDB();

dotenv.config({ path: ".env" });
const PORT = process.env.PORT || 8080;

// for encrypt the password
const bcrypt = require("bcrypt");
const { ifError } = require("assert");
// const passport = require("passport");
// storing data on localstorage
const users = [];

// calling initializePassport

initializePassport(
  passport,
  (email) => users.find((user) => user.email === email),
  (id) => users.find((user) => user.id === id)
);

// set view engine
app.set("view engine", "ejs"); // allows us to use ejs template engine
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));

// load assets

app.use("/css", express.static(path.resolve(__dirname, "assets/css")));

app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

app.use("/img", express.static(path.resolve(__dirname, "assets/img")));

// API (post request )
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

// for registering
app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    res.redirect("/login");
  } catch {
    res.redirect("/register");
  }
  console.log(users);
});

// app.delete('/logout', (req, res)=>{
//   req.logOut();
//   res.redirect('/login')
// })

// for logout user
app.delete('/logout', (req,res,next)=>{
  req.logout(function(err){
    if(err){
      return next(err);
    }
    res.redirect('/login')
  })
})

// loading routes
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
