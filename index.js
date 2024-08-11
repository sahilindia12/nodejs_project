console.log('first')
var fs = require('fs');

var express= require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path=require('path');
const jwt = require('jsonwebtoken');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const routerr = require('./route/rote');
const { name } = require('ejs');
const { default: User } = require('./model/user.js');
const user = require('./model/user.js');
const { Server } = require("socket.io");
const routerv = require('./route/video.js');
const db = require('./db.js');


require('dotenv').config();

fs.writeFileSync('sahil.text','hello')

// dbconnect 

db()
const app=express()
app.use(cors());


// mongoose.connect(`mongodb+srv://muni41153:pLv6yiBX0az5to2M@cluster0.l7e8a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)

// dbconnect

require('dotenv').config();



app.use(express.json());

app.set('view engine', 'ejs');
app.set('views ',path.resolve("./views"));
app.use('/',routerr)
app.use("/video",routerv)
app.use(express.static(path.join(__dirname, 'uplaods')));

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
  origin:"http://localhost:3000",
  methods: ["GET" ,"POST"],
  },
  maxHttpBufferSize: 1e8
  });


// let myContent = fs.readFileSync('sahil.text', 'utf-8');

//   console.log(myContent)
// console.log(path)

// const dir=path.join(__dirname,'textt')

// console.log(dir)


// const fun=()=>{
//     for (let index = 0; index < 5; index++) {

//      fs.writeFileSync(`sail${index},${dir},hello`)
//     }
// }



io.on('connection', (socket) => {

socket.emit("sendd",{"Data":"sahil","id":socket.id})

  socket.on('sendcl', (message) => {
      console.log('Message received:', message);
      // Broadcast the message to all connected clients
      const id= message.id
      console.log('id==',id)
     io.to(id).emit('private',message)
    // socket.broadcast.emit("private",message)
     
  });
  // socket.on("rdata",(data)=>{
  //   console.log(data)
  // })

  socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
  });
});





 
 

// fun()

// http.createServer((req,res)=>{
//     res.end("hello moto")
// }).listen(5000)
const uri=process.env.DATABS


app.get('/',async(req,res)=>{

    const finduser=await user.find()
    res.json({"Drta":"fsadf"})
})


app.post('/post',async(req,res)=>{
try {
    const dadta= new user({"nam":"sahil","age":232})

     const save= await dadta.save()
    res.json(dadta)
    console.log(req.body)
    
} catch (error) {
    console.log(error)
}


})



app.get("/origin",(req,res)=>{
    res.send("node ks ")
})

// const data=db()

server.listen(4000,()=>{
    console.log('run server')
})