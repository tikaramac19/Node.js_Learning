let http = require('http');
let dt = require('./firstModule');  // importing an existing file i.e module


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    
    res.end();
  }).listen(8080);