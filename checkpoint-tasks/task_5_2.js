const nodemailer = require('nodemailer');

async function main() {
  // Create a transporter object
  const transporter = nodemailer.createTransport({
    // Check from here all the supported "services" by nodemailer => https://community.nodemailer.com/2-0-0-beta/setup-smtp/well-known-services/
    // No need to set host, port, etc., because nodemailer Nodemailer has built-in support for a number of popular email services, such as Gmail, Outlook.com, and Yahoo! Mail, etc.
    service: 'gmail',
    // No need. However, if you are using a different SMTP server, or if you need to customize the connection settings, you can set the host, port, and other options explicitly.
      // host: 'smtp@gmail.com', // No need
      // port: 465, // No need
    secure: true,
    auth: {
      user: 'kareemtarekpk@gmail.com',
      pass: 'fjwzlqekffvlqobe'
    }
  });

  // Create a mail options object
  const sender = 'kareemtarekpk@gmail.com';
  const email_to = ['kareemtarekpk@outlook.com']; //we can use more than one email to send the same email content for them by making an array full of email instead of a single string
  const html = "<h2>Hello it\'s <b style='color: #00308F;'>KareemDEV</b>.</h2><p>I want to inform you that you have completed the <u style='color: crimson;'>Node.js checkpoint</u> successfully.</p><img style='border: 1px solid black;' src='cid:unique@_nodejs_checkpoint'/><br/>Thanks for your hard effort!<br/><br/><span style='color: #00308F; font-weight: bold;'>LinkedIn:</span> <a href='https://www.linkedin.com/in/kareem-tarek-1899a71a0/'>https://www.linkedin.com/in/kareem-tarek-1899a71a0/</a>";
  const mailOptions = {
    from: sender,
    to: email_to,
    subject: 'Node.js Checkpoint',
    html: html,
    attachments: [{
      filename: 'nodejs_checkpoint.png',
      path: './nodejs_checkpoint.png',
      cid: 'unique@_nodejs_checkpoint' // Sets content ID
    }],
  };

  // Send the email
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      console.log('The email has been sent from "'+sender+'" to "'+email_to+'".');
    }
  });
}

main()
.catch(err => console.log(err));