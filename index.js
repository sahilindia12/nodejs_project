console.log('first')
var fs = require('fs');
var http= require('http');
var express= require('express');

const path=require('path');
const routerr = require('./route/rote');

fs.writeFileSync('sahil.text','hello')


const app=express()
app.use(express.json());



app.use('/api',routerr)
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

// fun()

// http.createServer((req,res)=>{
//     res.end("hello moto")
// }).listen(5000)

app.get('/',(req,res)=>{
    res.send("shil india agina")
})

app.listen(3000,()=>{
    console.log('run server')
})