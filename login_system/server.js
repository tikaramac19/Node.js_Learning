const express = require('express');
const path = require('path')
const app = express();
const bodyparser = require('body-parser');
const session = require('express-session');
const {v4:uuidv4} = require('uuid');

const router = require('./router')

const port = process.env.PORT || 3000;

app.use(bodyparser.json()); // responsible for passing the incoming http request before we use it
app.use(bodyparser.urlencoded({extended: true}));



app.set('view engine', 'ejs')

// load static assets
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/assets', express.static(path.join(__dirname, 'public/assets/')))

app.use(session({
    secret: uuidv4(),
    resave:false,
    saveUninitialized: true
}))


app.use('/route', router);

// home route
app.get('/', (req, res) =>{
    res.render('base', {title: "Login system"})
})

app.listen(port, ()=>{
    console.log(`server run at : http://localhost:${port}`)
})