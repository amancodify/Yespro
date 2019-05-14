const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
admin.initializeApp();

exports.createUserQueries = functions.firestore
  .document("user_queries/{id}")
  .onCreate((snap, context) => {
    const newValue = snap.data();

    // access a particular field as you would any JS property
    const fname = newValue.fname;
    const lname = newValue.lname;
    const email = newValue.email;
    const message = newValue.message;

    // perform desired operations ...
    console.log("email query recieved from ", email);

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "pankajhaiudas@gmail.com",
        pass: "nibfqhbwkonkmyod"
      }
    });
    const mailOptions = {
      from: "pankajhaiudas@gmail.com", // sender address
      to: "amandocx@gmail.com", // list of receivers
      subject: "Email query from " + email, // Subject line
      html: "Email recieved from " + fname + " " + lname + "\nQuery: " + message // plain text body
    };
    transporter.sendMail(mailOptions, function(err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
  });