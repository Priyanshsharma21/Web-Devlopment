const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const app = express();

app.use(bodyParser.urlencoded({extended:true})); // To get Html
app.use(express.static(__dirname+"/")); // For Css and media

app.get('/',function(req,res){
res.sendFile(__dirname+'/index.html');
});





































app.listen(3000,function(){console.log("Server runnning 3000")});