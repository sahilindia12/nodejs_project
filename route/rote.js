var express= require('express');
const { apii } = require('../cont/contoraler');


const routerr=express.Router()

routerr.get('/go',(req,res)=>{


res.send("jjjj")
})




module.exports=routerr;