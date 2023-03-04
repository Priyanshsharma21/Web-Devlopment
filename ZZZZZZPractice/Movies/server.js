const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.sendfile(__dirname+'')
})

// app.get('/contact', (req,res)=>{
//     res.send("<h1 style='color: red;'>Hello Its Priyansh and My email is - piyuindia4@gmail.com</h1>")
// })

app.listen(3000,function(){
    console.log("server at port 3000")
})