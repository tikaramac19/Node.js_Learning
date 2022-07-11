let express = require("express");
let router = express.Router();

const credential = {
    email : 'tiku@gmail.com',
    password : 'admin123'
}
// login user

router.post('/login', (req,res) => {
    if(req.body.email == credential.email && req.body.password == credential.password){
            req.session.user = req.body.email;
            // res.redirect('/dashboard');
            res.end('login successful...!')
    }else{
        res.end("Invalid Username");
    }
});

module.exports = router;