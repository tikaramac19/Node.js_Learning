const express = require("express");
const app = express();
const router = express.Router();
const services = require("../services/render");
const BirthController = require("../controller/BirthController");

router.get("/",checkAuthenticated, services.homeRoutes);

// Root Router
// method GET/birth-certificate

router.get("/login",checkNotAuthenticated ,services.loginRoutes);

router.get("/register", checkNotAuthenticated,services.signupRoutes);

router.get("/birth-certificate",checkAuthenticated,services.birthRoute);
router.get("/birth-certificate/save",checkAuthenticated,services.birthSave);
router.get("/death-certificate",services.deathRoute);

//API Birth certificate

// router.post('/api/birth/create', (req,res)=>{
//     res.send(req.body);
// });

router.post('/api/birth/create', BirthController.create);
// router.post('/api/birth/create', BirthController.createBirth);
router.get('/api/birth/data', BirthController.find);

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
