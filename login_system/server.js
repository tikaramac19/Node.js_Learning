const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs')

// home route
app.get('/', (req, res) =>{
    res.render('base', {title: "Login system"})
})

app.listen(port, ()=>{
    console.log('Server started at port no. 3000')
})