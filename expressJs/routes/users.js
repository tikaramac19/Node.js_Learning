const express = require('express');
const router = express.Router();

router.use(logger);

router.get('/', (req,res)=>{
    res.send("Users List"); 
})

router.get("/new" , (req, res)=>{
    res.send("users forms list")
   })

// advanced routing 

router.post('/', (req,res)=>{
    res.send("Create User");
})

router.get('/:id', (req,res)=>{
    
    // req.params.id
    
    res.send(`Get the user with ID ${req.params.id}`);

    console.log(req.user);

})

// it updates the user according to our id
router.put('/:id', (req,res)=>{
    
    
    res.send(`Update the user with ID ${req.params.id}`);
})
router.delete('/:id', (req,res)=>{
    
    
    res.send(`Delete the user with ID ${req.params.id}`);
})

// we can write above code like this also

// router.route('/:id').get(
//     router.get((req,res)=>{
//         res.send(`Get the user with ID ${req.params.id}`);
//     }).put((req,res)=>{
//             res.send(`update the user with ID ${req.params.id}`);
//     }).delete(
//         (req,res)=>{
//             res.send(`Delete the user with ID ${req.params.id}`)
//         }
//     )
// )

const users = [{name:"Tikaram"}, {name: "Narayan"}]

router.param("id", (req,res, next, id)=>{ // it works like an middleware
        // console.log(id);
    req.user = users[id]
        next();
})

function logger(req,res, next){
    console.log(req.originalUrl)
    next()
}

module.exports = router; // export user router