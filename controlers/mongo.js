const mg = require("../model/mongo");

exports.mongoo = async (req, res) => {



  try {
    const mong= await  mg({"usernam":"sahil","databas":"mongodb"})
    await mong.save()
    res.status(500).json("usedasta")
  } catch (error) {
    res.send(error)
  }
  };