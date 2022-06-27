// The Nodemailer Module

// The nodemailer module can be downloaded and installed using npm.

// After downloaded the Nodemailer module, you can include the module in any application.

//  let nodemailer = require('nodemailer');

 // Send an Email

// Now we are ready to send emails from our server.

//  Use the username and password from your selected provider to send an email.

let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'acharyatikaram258@gmail.com',
        pass: 'ndtceelbfiuuwetr'
    }
});

let mailOptions = {
    from:'acharyatikaram258@gmail.com',
    to : 'shresthaural100@gmail.com, sandipshakya75@gmail.com',
    subject : 'Hello guyz ! sending this email using Node.js ',
    text: 'Kada raixa haha'
};

transporter.sendMail(mailOptions, function(err, info){
    if(err){
        console.log(err);
    }
    else{
        console.log('Email was sent : ' + info.response)
    }
});
