const express = require('express');
const path = require('path')
const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs')

// load static assets
app.use('/static', express.static(path.join(__dirname, 'public')))
// home route
app.get('/', (req, res) =>{
    res.render('base', {title: "Login system"})
})

app.listen(port, ()=>{
    console.log('Server started at port no. 3000')
})