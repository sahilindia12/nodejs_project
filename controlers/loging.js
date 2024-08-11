const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Singup = require('../model/singup');




exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await Singup.findOne({email});

  if (!user) {
    return res.send('User not found');
}

else{
  const isMatch =  bcrypt.compareSync(password, user.password)

if (!isMatch) {
    return res.send('Incorrect password');
}
}

const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
 return res.json({ token });

// try {
//   if (!user) {
//     return res.status(400).send('User not found');
// }
// } catch (error) {
//   return res.status(400).json({"error":error});
// }

  // const isMatch = bcrypt.compareSync(password, user.password);
  // if (!isMatch) {
  //     return res.status(400).send('Incorrect password');
  // }

  // const token = jwt.sign({ email: user.email }, secret, { expiresIn: '1h' });
  // res.json({ token });




return res.send("Fsdfsda")


};
