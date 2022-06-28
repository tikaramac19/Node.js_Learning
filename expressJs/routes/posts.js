const express = require('express');
const { route } = require('./users');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("This is posts page");
})

router.post("/", (req,res)=>{
    res.send("Created Post");
})

router.get("/:id", (req,res)=>{
    res.send(`Get the post with ID : ${req.params.id}`)
})
module.exports = router;