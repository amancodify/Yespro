const functions = require('firebase-functions')
const admin = require('firebase-admin')
const nodemailer = require("nodemailer");


exports.helloWorld = functions.https.onRequest((request, response) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'pankajhaiudas@gmail.com',
            pass: 'nibfqhbwkonkmyod'
        }
    });
    const mailOptions = {
        from: 'pankajhaiudas@email.com', // sender address
        to: 'amandocx@gmail.com', // list of receivers
        subject: 'Subject of your email', // Subject line
        html: 'gandu hai te'// plain text body
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}
);

