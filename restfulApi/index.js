const app = require('express')();

const PORT = 8080;

const http = require("http");

// http.createServer(function(req, res){
//         res.write("Hello There");

//         res.end();
// }).listen(8080)


app.listen(
    PORT,
   ()=> console.log(`it's alive on http://localhost:${PORT}`)
)

app.get('/about', (req, res)=>{ // run this function when the route is requested

    res.status(200).send({
        fname: "Tikaram",
        lname : "Ac"
    })


});

app.get('./contact', (req, res) =>{
    res.status(200).send({
        phone_number : 98225080886,
        email : "tikaramac19@gmail.com",
        github: "tikaramac19"

    })
})

// app.post('./about:id', (req, res)=>{
//         const {id} = req.params;

//         const {logo} = req.body;

//         if(!logo){
//             res.status(418).send({message: 'we need a logo!'})
//         }

//         res.send({
//             tshirt : ` tshirt with your ${logo} and ID of ${id}`
//         })
// })