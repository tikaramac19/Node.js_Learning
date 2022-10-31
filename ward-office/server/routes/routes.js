const express = require("express");
const app = express();
const router = express.Router();
const services = require("../services/render");

router.get("/",checkAuthenticated, services.homeRoutes);

// Root Router
// method GET/birth-certificate

router.get("/login",checkNotAuthenticated ,services.loginRoutes);

router.get("/register",checkNotAuthenticated, services.signupRoutes);

router.get("/birth-certificate", checkAuthenticated,services.birthRoute);
router.get("/death-certificate", checkAuthenticated,services.deathRoute)
//API



function checkAuthenticated(req,res, next){  // if user doesnt logged in it redirect to the login page
    if(req.isAuthenticated()){
        return next()
    }

    res.redirect('/login')
}

function checkNotAuthenticated(req,res, next){  // if user doesnt logged in it redirect to the login page
    if(req.isAuthenticated()){
       return res.redirect('/')
    }

    next()
}

module.exports = router;
