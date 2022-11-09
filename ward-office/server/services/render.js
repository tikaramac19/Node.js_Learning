const axios = require("axios");
const { response } = require("express");

exports.homeRoutes = (req, res) => {
  res.render("index.ejs", { name: req.user.name });

  // {name: req.user.name}
};
// login page render
exports.loginRoutes = (req, res) => {
  res.render("login");
};

exports.signupRoutes = (req, res) => {
  res.render("signup");
};
exports.birthRoute = (req, res) => {
  res.render("birthcertificate");
};

exports.deathRoute = (req, res) => {
  res.render("deathcertificate");
};

exports.birthSave = (req, res) => {
  // make a get requiest to the /api/birth/data

  axios
    .get("http://localhost:3002/api/birth/data")
    .then((response) => {
        // console.log(response);
      res.render("dataSave", { birthUsers: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

// exports.marrigeRoute = (req,res)=>{
//     res.render('marrige-certificate')
// }
