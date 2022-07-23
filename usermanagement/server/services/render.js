const axios = require('axios')

exports.homeRoutes = (req,res)=>{

    // make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            // console.log(response.method)
            res.render('index', {users: response.data}); 
        })
        .catch(err=>{
            res.send(err);
        })


    // rendering index file of the views 
}

exports.add_user = (req, res)=>{
    res.render('add_user');
}

exports.update_user = (req, res)=>{
    axios.get('http://localhost:3000/api/users', {params: {id:req.query.id}}) // it gets specific user from the database
        .then(function(userdata){
            // console.log(userdata);
            res.render("update_user", {user:userdata.data})
        })
        .catch(err=>{
            res.send(err);
        })
}