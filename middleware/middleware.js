const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

const adminRoute = require('./routes/admin');   // importing the admin route
const shopRoute = require('./routes/shop'); // importing the shop route

app.use(bodyParser.urlencoded({extended: false}));

// app.use('/products',(req,res,next)=>{
//     res.send('<h3>Hello from "PRODUCTS PAGE" ! </h3>')
// })

// app.post('/login', (req,res)=>{
//     res.send('<form action="log" method= "POST"> <input type="text" name="item"><button>Add Products</button> </input> </form>');

// })

// app.use('/log', (req,res)=>{
    
//     console.log(req.body)

//     res.redirect('/result')
// })
// app.get('/result', (req,res)=>{
//     res.send(`Entered Item is ${req.body.item}`)
// })
// app.use('/',(req,res,next)=>{
//     res.send('<h3>Hello from expressJS ! </h3>')
// })

// This is the simple code that allows us to route our request into different middleware

// If we have a middleware that should be applied to all requests, we would simply add it on top of
// all the other middleware


app.use('/admin',adminRoute);
app.use('/shop',shopRoute);

// app.use('/shop', (req,res)=>{
//     res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
// });

app.use('/', (req,res)=>{
    res.status(404).send('<h1>Page not found</h1>')  // showing the 404 error page with status code 
})

app.listen(port, ()=>{
    console.log(`server running at http://localhost:${port}`);
})