const mg = require("../model/mongo");

exports.mongget = async (req, res) => {

try {
    const dta= await mg.find()
res.json(dta)

} catch (error) {
    
}
  };