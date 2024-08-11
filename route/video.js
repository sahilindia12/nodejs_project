var express= require('express');

const routerv=express.Router()


const multer = require('multer');
const path = require('path');
const Image = require('../model/video');
const { email } = require('../controlers/email');
const { changepas } = require('../controlers/changepas');

const upmg=multer({

storage:multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"upload")
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname+"-"+Date.now()+'.png')
    }
})
}).single("image")

routerv.post('/img',upmg ,async(req,res)=>{


try {
    const img= await Image({
        filename: req.file.filename,
        path: req.file.path,
        size: req.file.size,
       })
    
  const sdata = await img.save()
  res.json({"dta":sdata})
} catch (error) {
    res.send(error)
}


    
    })


    routerv.get("/imgget", async(req,res)=>{
        const dta= await Image.findById({_id:"66b8ce32a4903dbc6fc66a4d"})
        res.json(dta)
    })

// Start the server





   routerv.post("/password",email)

   routerv.post("/changepas/:token",changepas)


module.exports=routerv