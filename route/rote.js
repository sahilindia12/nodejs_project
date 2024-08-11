var express= require('express');
const { apii } = require('../cont/contoraler');
const user = require('../model/user');

const bcrypt = require('bcryptjs');
const sing = require('../model/sing');
const { signup, signupp } = require('../controlers/singup');
const { logingg, login } = require('../controlers/loging');
const { userdata } = require('../controlers/userdata');
const auth = require('../midd/auth');
const { mongoo } = require('../controlers/mongo');
const { mongget } = require('../controlers/mongoget');
const { video } = require('../controlers/video');


const routerr=express.Router()

routerr.get('/go',async(req,res)=>{

const find= await user.find()
res.json(find)

})

routerr.post('/sing',async(req,res)=>{
    const {password,gmail,usernam}=req.body
    console.log(password,gmail,usernam)
   if (password &&usernam &&gmail) {
    res.send('its here')
   }
   else{
    res.send('not code')
   }
    
    })

    routerr.route('/sahil').get()

    routerr.post('/singup',signupp)
   
    routerr.post('/loging',login)

    routerr.post('/mongo',mongoo)
    routerr.post('/userdata',auth, userdata)

    routerr.get('/mongo',mongget)
    routerr.post('/video',video)

    // fileupadi






// Connect to MongoDB


// Define a storage strategy for Multer

// });

// Start the server



module.exports=routerr;