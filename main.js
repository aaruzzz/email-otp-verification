var nodemailer = require('nodemailer');   //browserify main.js -o bundle.js to run
var globalVariable=0;
function generate(email) {
    let num = '1234567890';
    let OTP = '';
    for (let i = 0; i < 6; i++) {
        OTP += num[Math.floor(Math.random() * 10)];
    }
    document.getElementById('otp').innerHTML = OTP;

    //Send Mail
    let transporter = nodemailer.createTransport({
       service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    let mailOptions = {
        from: 'email.kustore@gmail.com',
        to: `${email}`,
        subject: 'OTP verification KUstore',
        text: `Your OTP is: ${OTP}`
    };
    transporter.sendMail(mailOptions, function(err,data){
        if(err){
            console.log('Error: ',err);
        } else{
            console.log('Email sent!');
        }
    });
    console.log(`Your email is: ${email}`);
    globalVariable=OTP;
    console.log(`OTP is: ${OTP}`);
}
function match(a) {
    var sum = parseInt(a);
    var b = globalVariable;
    if (sum == b) {
        alert("OTP verified");
    }
    else{
        alert("Please enter valid OTP");
    }
}