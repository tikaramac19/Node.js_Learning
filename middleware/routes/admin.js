const { application } = require('express');
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

router.get('/add-product', (req, res)=>{
    res.send('<form action="/admin/add-product" method= "POST"> <input type="text" name="item"><button>Add Products</button> </input> </form>');

    res.redirect('/product')
})

router.post('/add-product', (req, res)=>{

    console.log(req.body)
    
    res.redirect('/shop')
})

module.exports = router;