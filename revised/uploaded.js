// Include the formidable module to be able to parse the uploaded file once it reaches the server.

// when the file is uploaded, it gets placed on a temporary folder on you computer.

let http = require('http');

let formidable = require('formidable');

http.createServer(function(req,res){
    if(req.url == '/fileupload'){
        let form = new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            // fields contains the form fields
            // files contains the uploaded file
            // files.filetoupload.path contains the path of the uploaded file
            res.write('File uploaded');
            res.end();
        });
    }
    else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);