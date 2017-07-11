require('dotenv').config()
var nodemailer = require('nodemailer');

console.log(process.env.EMAIL_PASSWORD)

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lindsaycarbonell@gmail.com',
    pass: process.env.EMAIL_PASSWORD
  }
});

var mailOptions = {
  from: 'lindsaycarbonell@gmail.com',
  to: 'lindsaycarbonell@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
