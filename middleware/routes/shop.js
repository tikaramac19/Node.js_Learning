const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('<h2> Hello from the Express ! </h2>')
})

module.exports = router;