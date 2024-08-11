const Singup = require("../model/singup");

const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
exports.email = async (req, res) => {



    const { email } = req.body;
    const user = await Singup.findOne({email});

    if (!user) {
        return res.status(404).json({"data":"not found"})
    }

   
    const token = jwt.sign({ email: user.email }, process.env. JWT_SECRET, { expiresIn: '1h' });


    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "indiasahil44@gmail.com",
            pass: "wspm vmai yrbn wwgm",
        },
    });
    const resetLink = `http://localhost:4000/changepas/${token}`;

    const mailOptions = {
        from: "indiasahil44@gmail.com",
        to:  "indiasahil44@gmail.com",
        subject: 'Password Reset Request',
        html: `<p>You requested for a password reset. Click <a href="${resetLink}">here</a> to reset your password.</p>`,

    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email');
        }
        res.send('Password reset link sent to your email');
    });

  };
  