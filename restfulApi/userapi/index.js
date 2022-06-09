const http = require('http');

// console.log(http)
const PORT = 8080;

http.createServer(function(req, res){
        // res.write("Hello there");

        // console.log(req.url);

        if(req.url == '/'){

            res.writeHead(200, {'Content-type' : 'text/html'});

            res.end("Hello from the home page");
        }
        else if(req.url == '/contact'){
            res.writeHead(200, {'Content-type' : 'text/html'});

            res.end("Welcome to the contact page");
        }
        else if(req.url == '/about'){
            res.writeHead(200, {'Content-type' : 'text/html'});
            res.end("Welcome to the about Page")
        }
        else if(req.url == '/userapi'){
            res.writeHead(200, {'Content-type' : 'text/html'});
            res.end("Welcome to the UserApi Page")
            
        }
        else{
            res.writeHead(401, {'Content-type' : 'text/html'});
            res.end("404 error pages. Page doesn't exitst");
        }




        res.end();
}).listen(PORT);


