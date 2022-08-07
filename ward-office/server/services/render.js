
exports.homeRoutes = (req,res)=>{
    res.render('index');
}

exports.birthRoute = (req,res)=>{
    res.render('birth-certificate')
}

exports.deathRoute = (req,res)=>{
    res.render('death-certificate')
}

exports.marrigeRoute = (req,res)=>{
    res.render('marrige-certificate')
}