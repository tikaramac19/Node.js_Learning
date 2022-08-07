const express = require("express");
const app = express();
const router = express.Router();
const services = require('../services/render');
// Root Router
// method GET/

router.get("/", services.homeRoutes);

// Root Router
// method GET/birth-certificate

router.get("/birth-certificate", (req, res) => {
  res.send("THis is birth-certificate page");
});

// Root Router
// method GET/death-certificate

router.get("/death-certificate", (req, res) => {
  res.send("THis is death-certificate page");
});

// Root Router
// method GET/marrige-certificate

router.get("/marrige-certificate", (req, res) => {
  res.send("THis is marrige-certificate page");
});

//API

module.exports = router;
