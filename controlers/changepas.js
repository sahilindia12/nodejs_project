const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const Singup = require("../model/singup");

exports.changepas = async (req, res) => {
   
    const { token } = req.params;
    const{password}=req.body

//     const decoded = jwt.verify(token,process.env.JWT_SECRET);
// res.json(decoded)

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
      const user= await Singup.findOne({email:decoded.email})


      const haspas = await bcrypt.hash(password, 10);
       user.password=haspas

       await user.save()
        res.send('Password has been reset');
    } catch (error) {
        res.status(400).send('Invalid or expired token');
    }
  
  };