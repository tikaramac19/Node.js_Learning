const express = require('express');
const router = express.Router();



router.get('/', (req,res)=>{
    res.send("Users List"); 
})


router.get("/new" , (req, res)=>{
 res.send("users forms list")
})
// advanced routing 

router.post('/', (req,res)=>{
    res.send("Create User");
})

router.get('/:id', (req,res)=>{
    
    // req.params.id
    
    res.send(`Get the user with ID ${req.params.id}`);
})

module.exports = router; // export user router