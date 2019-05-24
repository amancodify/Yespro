const nodemailer = require("nodemailer");
exports.handler = (snap, context) => {
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
      html: `
      <style>
      tr td:first-child {
          color: darkviolet
      }
  </style>
  
  <h1>🆄🆂🅴🆁'🆂 🆀🆄🅴🆁🆈⚡️📱</h1>
  <table cellpadding="10">
  <tr>
    <td><b>Email recieved from:</b></td>
    <td> ${email}</td>
  </tr>
  <tr>
    <td><b>Full Name: </b></td>
    <td> ${fname} ${lname}</td>
  </tr>
  <tr>
    <td><b>Query: </b></td>
    <td> ${message}</td>
  </tr>
  </table>
      `
    };
    transporter.sendMail(mailOptions, function(err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
  }