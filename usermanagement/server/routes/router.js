const express = require('express');
const app = express();
const router = express.Router()


router.get('/', (req,res)=>{
    res.render('index'); // rendering index file of the views 
});

router.get('/add_user', (req,res)=>{
    res.render('add_user');
})

router.get('/update_user', (req,res)=>{
    res.render('update_user');
})

module.exports = router;