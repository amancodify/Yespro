const nodemailer = require("nodemailer");
exports.handler = (snap, context) => {
    const newValue = snap.data();

    // access a particular field as you would any JS property
    const name = newValue.name;
    const cname = newValue.cname;
    const email = newValue.email;
    const phone = newValue.phone;
    const etype = newValue.etype;
    const days = newValue.days;
    const freereq = newValue.freereq;
    const location = newValue.location;

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
  
  <h1>🅵🆁🅴🅴🅻🅰🅽🅲🅴🆁'🆂 🆀🆄🅴🆁🆈⚡️📱</h1>
  <table cellpadding="10">
  <tr>
    <td><b>Email recieved from:</b></td>
    <td> ${email}</td>
  </tr>
  <tr>
    <td><b>Full Name: </b></td>
    <td> ${name}</td>
  </tr>
  <tr>
    <td><b>Company Name: </b></td>
    <td> ${cname}</td>
  </tr>
  <tr>
    <td><b>Event Type: </b></td>
    <td> ${etype}</td>
  </tr>
  <tr>
    <td><b>Phone: </b></td>
    <td> ${phone}</td>
  </tr>
  <tr>
    <td><b>No. of Days: </b></td>
    <td> ${days}</td>
  </tr>
  <tr>
    <td><b>Freelancers Required: </b></td>
    <td> ${freereq}</td>
  </tr>
  <tr>
    <td><b>Location: </b></td>
    <td> ${location}</td>
  </tr>
  </table>
      
      `
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) console.log(err);
        else console.log(info);
    });
}