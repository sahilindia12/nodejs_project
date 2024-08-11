const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Singup = require('../model/singup');


exports.signupp = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    let user = await Singup.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }



    const salt = await bcrypt.genSalt(10);
    const haspas = await bcrypt.hash(password, salt);
    const users= await Singup({username,password:haspas,email})
    await users.save();

    const payload = {
      user: {
        id: username,
        password:password
      }
    };

    jwt.sign(payload, process.env. JWT_SECRET, { expiresIn: 3600000 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error("err",err.message);
    res.status(500).send('Server error');
  }
};
