
exports.homeRoutes = (req,res)=>{
    res.render('index.ejs',{name: req.user.name});

    // {name: req.user.name}
}
// login page render
exports.loginRoutes = (req,res)=>{
    res.render('login');
}

exports.signupRoutes = (req,res)=>{
    res.render("signup");
}
// exports.birthRoute = (req,res)=>{
//     res.render('birth-certificate')
// }

// exports.deathRoute = (req,res)=>{
//     res.render('death-certificate')
// }

// exports.marrigeRoute = (req,res)=>{
//     res.render('marrige-certificate')
// }