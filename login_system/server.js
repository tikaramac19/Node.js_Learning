const express = require('express');
const path = require('path')
const app = express();
const bodyparser = require('body-parser');
const session = require('express-session');

const port = process.env.PORT || 3000;

app.use(bodyparser.json()); // responsible for passing the incoming http request before we use it
app.use(bodyparser.urlencoded({extended: true}));

app.use(session({
    secret: 'secret',
    resave:false,
    saveUninitialized: true
}))

app.set('view engine', 'ejs')

// load static assets
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/assets', express.static(path.join(__dirname, 'public/assets/')))

// home route
app.get('/', (req, res) =>{
    res.render('base', {title: "Login system"})
})

app.listen(port, ()=>{
    console.log('Server started at port no. 3000')
})